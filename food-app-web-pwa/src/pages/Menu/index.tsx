import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Dish } from "context";
import Header from "components/Header";
import Paper from "components/Paper";
import Links from "components/Links";
import Link from "components/Link";
import Categories from "components/Categories";
import ItemCard from "components/ItemCard";

import useLocalStorage, { KEYS } from "hooks/useLocalStorage";
import useDishesMap from "hooks/useDishesMap";

import s from "./index.module.css";

type Category = {
  category: string;
  dishes: Dish[];
};

function Menu() {
  const history = useHistory();
  const [selectedCat, setSelectedCat] = useState("Recommended");
  const dishesMap = useDishesMap();
  const [categories] = useLocalStorage<Category[]>(KEYS.CATEGORIES, []);
  const [recommendItems] = useLocalStorage<Dish[]>(KEYS.RECOMMEND, []);
  const handleItemCardOnClick = (id: string) => {
    history.push(`/food/${id}`);
  };
  const categoriesMap = React.useMemo(() => {
    const categoriesMap: { [key: string]: Category } = {};
    categories.forEach((category) => {
      categoriesMap[category.category] = category;
    });
    categoriesMap["Recommended"] = {
      category: "Recommended",
      dishes: recommendItems,
    };
    return categoriesMap;
  }, [categories, recommendItems]);
  return (
    <div>
      <Header outlet="Parkway Parade" />
      <Paper>
        <Links>
          <Link>Main</Link>
          <Link>Putien</Link>
        </Links>
        <Categories
          categories={[{ name: "Recommended" }].concat(
            categories.map((category) => ({
              name: category.category,
            }))
          )}
          className={s.categories}
          onSelect={(name) => {
            setSelectedCat(name);
          }}
        />
      </Paper>
      <div className={s.itemCardContainer}>
        {categoriesMap[selectedCat] &&
          categoriesMap[selectedCat].dishes.map(({ id }) => {
            return (
              <ItemCard
                key={id}
                id={id + ""}
                itemName={dishesMap[id].name}
                itemPrice={`$${dishesMap[id].price.toFixed(2)}`}
                url={dishesMap[id].image}
                onClick={handleItemCardOnClick}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Menu;
