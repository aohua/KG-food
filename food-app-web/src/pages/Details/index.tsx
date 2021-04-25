import React from "react";
import { useHistory } from "react-router-dom";

import Header from "components/Header";
import Paper from "components/Paper";
import Links from "components/Links";
import Link from "components/Link";
import HorizontalCard from "components/HorizontalCard";
import Title from "components/Title";
import ItemCard from "components/ItemCard";

import s from "./index.module.css";

function Details() {
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
      </Paper>
      <HorizontalCard
        dish={{
          id: "1",
          name: "Pan-fried Yellow Croakers",
          price: 15.9,
          image:
            "https://www.putien.com/wp-content/uploads/2021/03/%E5%AE%B6%E5%B8%B8%E7%84%96%E7%AC%8B%E5%B9%B2.jpg",
        }}
      />
      <Title className={s.title}>Similar Food Items</Title>
      <div className={s.itemCardContainer}>
        <ItemCard
          id={"1"}
          itemName={"Pan-fried Yellow Croakers"}
          itemPrice={"$15.90"}
          url={
            "https://www.putien.com/wp-content/uploads/2021/03/%E5%AE%B6%E5%B8%B8%E7%84%96%E7%AC%8B%E5%B9%B2.jpg"
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

export default Details;
