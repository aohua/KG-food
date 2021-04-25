import { Order as OrderType } from "context";
import s from "./index.module.css";
const Order = ({ order }: { order: OrderType }) => {
  return (
    <div className={s.container}>
      <div className={s.orderInfo}>
        <div>{order.id}</div>
        <div style={{ textAlign: "right" }}>{order.customer}</div>
        <div>{order.dateTime}</div>
        <div style={{ textAlign: "right" }}>Table {order.table}</div>
      </div>
      <ul>
        {order.dishs.map((dish) => {
          return (
            <li>
              {dish.name} X {dish.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Order;
