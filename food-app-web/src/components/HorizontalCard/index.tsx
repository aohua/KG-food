import ItemImage from "./components/ItemImage";
import Button from "components/Button";
import { useContext } from "react";
import { Dish, GlobalContext } from "context";
import s from "./index.module.css";

type Props = {
  dish: Dish;
};

const HorizontalCard = ({ dish }: Props) => {
  const { cart, setCart } = useContext(GlobalContext);
  const addToCart = () => {
    const dIndex = cart.findIndex((d) => {
      return d.name === dish.name;
    });
    if (dIndex >= 0) {
      const existingDish = cart[dIndex];
      if (existingDish && existingDish.quantity) {
        existingDish.quantity += 1;
      }
    } else {
      cart.push({ ...dish, quantity: 1 });
    }
    setCart([...cart]);
  };
  return (
    <div className={s.container}>
      <ItemImage url={dish.image} />
      <div style={{ marginLeft: 12, flexGrow: 1 }}>
        <div className={s.itemName}>{dish.name}</div>
        <div className={s.itemPrice}>{`$${dish.price}`}</div>
        <div style={{ textAlign: "right" }}>
          <Button onClick={addToCart}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
