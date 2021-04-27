import { useContext, useState } from "react";
import { useLocation } from "react-router";
import { GlobalContext } from "context";
import Dish from "./components/Dish";
import s from "./index.module.css";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";

type ComplementaryItemType = {
  id: number;
  name: string;
  complementary_dish: { count: number; id: number; name: string }[];
};

const Cart = () => {
  const { cart, setCart, orders, setOrders } = useContext(GlobalContext);
  const [complementaryItems, setComplementaryItems] = useLocalStorage<
    ComplementaryItemType[]
  >(KEYS.COMPLEMENTARY_ITEMS, []);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const [customer] = useLocalStorage(KEYS.CUSTOMER_NAME, "");
  const [phone] = useLocalStorage(KEYS.PHONE, "");
  const [table] = useLocalStorage(KEYS.TABLE, "");
  const removeDish = (index: number) => {
    cart.splice(index, 1);
    setCart([...cart]);
  };
  if (location.pathname === "/admin") {
    return null;
  }
  return (
    <>
      <div
        className={`${s.cartPanel} ${
          isActive && cart.length ? s.cartActive : ""
        }`}
      >
        <div className={s.title}>Your cart</div>
        {cart.map((dish, index) => {
          return (
            <Dish
              key={dish.id}
              dish={dish}
              removeDish={() => removeDish(index)}
            />
          );
        })}
      </div>
      <div
        className={s.cart}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            You have added{" "}
            {cart.reduce((pre, cur) => {
              return pre + (cur.quantity || 0);
            }, 0)}{" "}
            items
          </div>
          {!!cart.length && isActive && (
            <div
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                const date = new Date();
                const id = `${Date.now()}`;
                orders.push({
                  id,
                  _id: id,
                  customer: customer,
                  phone: phone,
                  dateTime: date.toLocaleString(),
                  dishes: [...cart],
                  table,
                });
                for (let i = 0; i < cart.length - 1; i++) {
                  const dish1Complementary = complementaryItems.find((item) => {
                    return item.id === cart[i].id;
                  });
                  const link = dish1Complementary?.complementary_dish.find(
                    (dish) => {
                      return dish.id === cart[i + 1].id;
                    }
                  );
                  if (link) {
                    link.count++;
                  } else {
                    dish1Complementary?.complementary_dish.push({
                      id: cart[i + 1].id,
                      name: cart[i + 1].name,
                      count: 1,
                    });
                  }
                  dish1Complementary?.complementary_dish.sort(
                    (a, b) => b.count - a.count
                  );
                }
                setComplementaryItems(complementaryItems);
                setOrders([...orders]);
                setCart([]);
              }}
            >
              <i className="fas fa-shopping-cart"></i> Checkout
            </div>
          )}
        </div>
      </div>
      <div className={s.cardPlaceholder} />
    </>
  );
};

export default Cart;
