import { useMemo } from "react";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";
import { Dish } from "context";
const useDishesMap = () => {
  const [dishes] = useLocalStorage<Dish[]>(KEYS.DISHES, []);
  const dishesMap = useMemo(() => {
    const dishesMap: { [key: string]: Dish } = {};
    dishes.forEach((dish) => {
      dishesMap[dish.id] = dish;
    });
    return dishesMap;
  }, [dishes]);
  return dishesMap;
};
export default useDishesMap;
