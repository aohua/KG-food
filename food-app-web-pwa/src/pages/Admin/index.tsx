import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Dish, GlobalContext } from "context";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";
import Tab from "./components/Tab";
import Order from "./components/Order";
import AddDishForm from "./components/AddDishForm";
import s from "./index.module.css";
import Button from "components/Button";
const Admin = () => {
  const [showOrders, setShowOrders] = useState(true);
  const { orders } = useContext(GlobalContext);
  const history = useHistory();
  const [, setDishes] = useLocalStorage<Dish[]>(KEYS.DISHES, []);
  const [, setCategories] = useLocalStorage(KEYS.CATEGORIES, []);
  const [, setSimilarItems] = useLocalStorage(KEYS.SIMILAR_ITEMS, {});
  const [, setComplementaryItems] = useLocalStorage(
    KEYS.COMPLEMENTARY_ITEMS,
    []
  );
  return (
    <div>
      <Tab
        onAdminClick={() => {
          setShowOrders(false);
        }}
        onOrderClick={() => {
          setShowOrders(true);
        }}
      />
      <div className={s.backBtn} onClick={history.goBack}>
        <i style={{ marginRight: 8 }} className="fas fa-chevron-left"></i>
        Back
      </div>
      {showOrders && (
        <div className={s.container}>
          {orders.map((order) => {
            return <Order key={order.id} order={order} />;
          })}
        </div>
      )}
      {!showOrders && (
        <div className={s.container}>
          <Button
            onClick={() => {
              // TODO: upload orders
              fetch("http://127.0.0.1:5000/order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(orders),
              });
              console.log("Order uploaded");
            }}
          >
            Upload Order
          </Button>
          <Button
            style={{ marginTop: 8 }}
            onClick={async () => {
              // update dishes
              const dishResponse = await fetch("http://127.0.0.1:5000/dish");
              const dishesFromApi = await dishResponse.json();
              setDishes(dishesFromApi);
              // update categories
              const categoriesResponse = await fetch(
                "http://127.0.0.1:5000/category"
              );
              const categoriesFromApi = await categoriesResponse.json();
              setCategories(categoriesFromApi);
              // update similar items
              const similarResponse = await fetch(
                "http://127.0.0.1:5000/similar_items"
              );
              const similarFromApi = await similarResponse.json();
              setSimilarItems(similarFromApi);
              // update complementary items
              const complementaryResponse = await fetch(
                "http://127.0.0.1:5000/complementary_items"
              );
              const complementaryFromApi = await complementaryResponse.json();
              setComplementaryItems(complementaryFromApi);
            }}
          >
            Sync Menu
          </Button>
          <AddDishForm />
        </div>
      )}
    </div>
  );
};

export default Admin;
