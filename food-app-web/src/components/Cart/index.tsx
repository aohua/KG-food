import { useContext, useState } from "react";
import { GlobalContext } from "context";
import Dish from "./components/Dish";
import s from "./index.module.css";

const Cart = () => {
  const { cart, setCart, orders, setOrders } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState(false);
  const removeDish = (index: number) => {
    cart.splice(index, 1);
    setCart([...cart]);
  };
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
                orders.push({
                  id: `${Date.now()}`,
                  customer: "aohua",
                  dateTime: date.toLocaleString(),
                  dishs: [...cart],
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
