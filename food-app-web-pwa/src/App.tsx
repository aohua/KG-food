import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext, Dish, Order } from "context";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";
import Home from "pages/Home";
import Menu from "pages/Menu";
import Admin from "pages/Admin";
import Cart from "components/Cart";
import Details from "pages/Details";
import s from "./App.module.css";

function App() {
  const [cart, setCart] = useLocalStorage<Dish[]>(KEYS.CART, []);
  const [orders, setOrders] = useLocalStorage<Order[]>(KEYS.ORDERS, []);
  const [dishes, setDishes] = useLocalStorage<Dish[]>(KEYS.DISHES, []);
  const [, setCategories] = useLocalStorage(KEYS.CATEGORIES, []);
  const [, setSimilarItems] = useLocalStorage(KEYS.SIMILAR_ITEMS, {});
  const [, setComplementaryItems] = useLocalStorage(
    KEYS.COMPLEMENTARY_ITEMS,
    []
  );
  const [, setRecommendItems] = useLocalStorage(KEYS.RECOMMEND, []);
  const fetchAll = async () => {
    if (!dishes.length) {
      // fetch all to init menu
      // update dishes
      const dishResponse = await fetch("http://127.0.0.1:5000/dish");
      const dishesFromApi = await dishResponse.json();
      setDishes(dishesFromApi);
      // update categories
      const categoriesResponse = await fetch("http://127.0.0.1:5000/category");
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
      // update recommended
      const recommendResponse = await fetch(
        "http://127.0.0.1:5000/recommendation"
      );
      const recommendFromApi = await recommendResponse.json();
      setRecommendItems(recommendFromApi);
    }
  };

  fetchAll();

  return (
    <div className={s.App}>
      <GlobalContext.Provider
        value={{
          cart,
          setCart: (cart) => setCart(cart),
          orders,
          setOrders: (orders) => {
            setOrders(orders);
          },
        }}
      >
        <Router>
          <Switch>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/food/:foodId">
              <Details />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Cart />
        </Router>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
