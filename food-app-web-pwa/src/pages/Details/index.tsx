import { useParams } from "react-router-dom";

import useLocalStorage, { KEYS } from "hooks/useLocalStorage";
import { Dish } from "context";

import Header from "components/Header";
import Paper from "components/Paper";
import Links from "components/Links";
import Link from "components/Link";
import HorizontalCard from "components/HorizontalCard";

import SimilarItems from "./components/SimilarItems";

function Details() {
  let { foodId } = useParams<{ foodId: string }>();
  const [dishes] = useLocalStorage<Dish[]>(KEYS.DISHES, []);
  const currentDish = dishes.find((dish) => {
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
      <SimilarItems />
    </div>
  );
}

export default Details;
