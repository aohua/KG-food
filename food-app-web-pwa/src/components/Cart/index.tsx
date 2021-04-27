import { useContext, useState } from "react";
import { useLocation } from "react-router";
import { GlobalContext } from "context";
import Dish from "./components/Dish";
import s from "./index.module.css";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";

const Cart = () => {
  const { cart, setCart, orders, setOrders } = useContext(GlobalContext);
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
