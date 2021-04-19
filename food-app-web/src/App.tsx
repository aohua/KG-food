import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext, Dish, Order } from "context";
import Home from "pages/Home";
import Menu from "pages/Menu";
import Cart from "components/Cart";
import Details from "pages/Details";
import s from "./App.module.css";

function App() {
  const [cart, setCart] = useState<Dish[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
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
            <Route path="/menu/:menuId">
              <Menu />
            </Route>
            <Route path="/food/:foodId">
              <Details />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Cart />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
