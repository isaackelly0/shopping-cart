import './Routes.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Main from "./components/Main";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import {useState} from "react";

const Routes = () => {
  const [list, setList] = useState(1)
  const update = () => {
    setList(list + 1)
    console.log(list)
  }
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Shop</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/cart">
          <Cart products={list}/>
        </Route>
        <Route path="/checkout">
          <Checkout click={update}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
