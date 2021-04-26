import { useHistory, useParams } from "react-router-dom";
import Title from "components/Title";
import ItemCard from "components/ItemCard";

import s from "./index.module.css";
import useDishesMap from "hooks/useDishesMap";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";

type SimilarItemsType = {
  id: number;
  name: string;
  dish: { id: string }[];
};

const SimilarItems = () => {
  const history = useHistory();
  const { foodId } = useParams<{ foodId: string }>();
  const dishesMap = useDishesMap();
  const [similarItems] = useLocalStorage<SimilarItemsType[]>(
    KEYS.SIMILAR_ITEMS,
    []
  );
  const currentDish = similarItems.find((item) => {
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
      <Title className={s.title}>Similar Food Items</Title>
      <div className={s.itemCardContainer}>
        {currentDish.dish.map((dish) => {
          return (
            <ItemCard
              key={dish.id}
              id={dish.id}
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
export default SimilarItems;
