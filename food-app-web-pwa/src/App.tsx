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
