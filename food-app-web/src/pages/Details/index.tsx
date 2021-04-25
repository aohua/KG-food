import { useHistory, useParams } from "react-router-dom";

import useLocalStorage, { KEYS } from "hooks/useLocalStorage";
import { Dish } from "context";

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
  let { foodId } = useParams<{ foodId: string }>();
  const [dishs] = useLocalStorage<Dish[]>(KEYS.DISHS, []);
  const handleItemCardOnClick = (id: string) => {
    history.push(`/food/${id}`);
  };
  const currentDish = dishs.find((dish) => {
    return dish.id === Number(foodId);
  });
  if (!currentDish) {
    return null;
  }
  return (
    <div>
      <Header location="Blk 123 Eunos Ave 1 #12-123" numOfStores={2} est={40} />
      <Paper>
        <Links>
          <Link to={"/menu"}>Main</Link>
          <Link>Putien</Link>
        </Links>
      </Paper>
      <HorizontalCard
        dish={{
          id: currentDish.id,
          name: currentDish.name,
          price: currentDish.price,
          image: currentDish.image,
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
