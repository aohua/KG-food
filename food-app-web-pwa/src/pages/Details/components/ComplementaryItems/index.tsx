import { useHistory, useParams } from "react-router-dom";
import Title from "components/Title";
import ItemCard from "components/ItemCard";

import s from "./index.module.css";
import useDishesMap from "hooks/useDishesMap";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";

type ComplementaryItemType = {
  id: number;
  name: string;
  complementary_dish: { count: number; id: number; name: string }[];
};

const ComplementaryItems = () => {
  const history = useHistory();
  const { foodId } = useParams<{ foodId: string }>();
  const dishesMap = useDishesMap();
  const [complementaryItems] = useLocalStorage<ComplementaryItemType[]>(
    KEYS.COMPLEMENTARY_ITEMS,
    []
  );
  const currentDish = complementaryItems.find((item) => {
    return item.id === Number(foodId);
  });
  if (!currentDish) {
    return null;
  }
  const handleItemCardOnClick = (id: string) => {
    history.push(`/food/${id}`);
  };
  return (
    <>
      <Title className={s.title}>Goes well with</Title>
      <div className={s.itemCardContainer}>
        {currentDish.complementary_dish.map((dish) => {
          return (
            <ItemCard
              key={dish.id}
              id={dish.id + ""}
              itemName={dishesMap[dish.id].name}
              itemPrice={`$${dishesMap[dish.id].price.toFixed(2)}`}
              url={dishesMap[dish.id].image}
              onClick={handleItemCardOnClick}
            />
          );
        })}
      </div>
    </>
  );
};
export default ComplementaryItems;
