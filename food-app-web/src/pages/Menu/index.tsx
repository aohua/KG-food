import React from "react";
import { useHistory } from "react-router-dom";

import Header from "components/Header";
import Paper from "components/Paper";
import Links from "components/Links";
import Link from "components/Link";
import Categories from "components/Categories";
import ItemCard from "components/ItemCard";

import s from "./index.module.css";

function Menu() {
  const history = useHistory();
  const handleItemCardOnClick = (id: string) => {
    history.push(`/food/${id}`);
  };
  return (
    <div>
      <Header location="Blk 123 Eunos Ave 1 #12-123" numOfStores={2} est={40} />
      <Paper>
        <Links>
          <Link>Main</Link>
          <Link>Putien</Link>
        </Links>
        <Categories
          categories={[
            { name: "Recommended" },
            { name: "Mains" },
            { name: "Sides" },
            { name: "Drinks" },
            { name: "Drinks" },
          ]}
          className={s.categories}
        />
      </Paper>
      <div className={s.itemCardContainer}>
        <ItemCard
          id={"1"}
          itemName={"Pan-fried Yellow Croakers"}
          itemPrice={"$15.90"}
          url={
            "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/%E5%AE%B6%E5%B8%B8%E7%84%96%E7%AC%8B%E5%B9%B2.jpeg?alt=media&token=ec408d99-f8b5-4571-9e3e-f4a6e697f429"
          }
          onClick={handleItemCardOnClick}
        />
        <ItemCard
          id={"2"}
          itemName={"Pan-fried Yellow Croakers"}
          itemPrice={"$15.90"}
          url={
            "https://www.putien.com/wp-content/uploads/2021/03/%E5%AE%B6%E5%B8%B8%E7%84%96%E7%AC%8B%E5%B9%B2.jpg"
          }
          onClick={handleItemCardOnClick}
        />
        <ItemCard
          id={"3"}
          itemName={"Pan-fried Yellow Croakers"}
          itemPrice={"$15.90"}
          url={
            "https://www.putien.com/wp-content/uploads/2021/03/%E5%AE%B6%E5%B8%B8%E7%84%96%E7%AC%8B%E5%B9%B2.jpg"
          }
          onClick={handleItemCardOnClick}
        />
        <ItemCard
          id={"4"}
          itemName={"Pan-fried Yellow Croakers"}
          itemPrice={"$15.90"}
          url={
            "https://www.putien.com/wp-content/uploads/2021/03/%E5%AE%B6%E5%B8%B8%E7%84%96%E7%AC%8B%E5%B9%B2.jpg"
          }
          onClick={handleItemCardOnClick}
        />
        <ItemCard
          id={"5"}
          itemName={"Pan-fried Yellow Croakers"}
          itemPrice={"$15.90"}
          url={
            "https://www.putien.com/wp-content/uploads/2021/03/%E5%AE%B6%E5%B8%B8%E7%84%96%E7%AC%8B%E5%B9%B2.jpg"
          }
          onClick={handleItemCardOnClick}
        />
      </div>
    </div>
  );
}

export default Menu;
