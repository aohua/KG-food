import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Details from 'pages/Details';
import s from './App.module.css';


function App() {
  return (
    <div className={s.App}>
      <Router >
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
    </div>
  );
}

export default App;
