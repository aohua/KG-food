import { useHistory, useParams } from "react-router-dom";
import Title from "components/Title";
import ItemCard from "components/ItemCard";

import s from "./index.module.css";
import useDishesMap from "hooks/useDishesMap";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";

import { tfidfVectorizer, compare } from "models/similarProduct";

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

  const renderItems = () => {
    // remove duplicates
    const keys: { [id: string]: boolean } = {};
    currentDish.dish.forEach((dish) => {
      keys[dish.id] = true;
    });
    const similarDishes = Object.keys(keys)
      .concat(foodId)
      .map((key) => {
        return dishesMap[key];
      });
    const dishesWithTfidf = tfidfVectorizer(similarDishes);
    similarDishes.forEach((dish) => {
      dish.similarity = compare(foodId, dish.id + "", dishesWithTfidf);
    });
    similarDishes.sort((a, b) => b.similarity!! - a.similarity!!);
    similarDishes.shift();
    return similarDishes.splice(0, 6).map((dish) => {
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
    });
  };
  return (
    <>
      <Title className={s.title}>Similar Food Items</Title>
      <div className={s.itemCardContainer}>{renderItems()}</div>
    </>
  );
};
export default SimilarItems;
