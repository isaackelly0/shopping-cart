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
  const [list, setList] = useState([])
  const update = (obj) => {
    let check = true
    if(list.length){
      for(let i = 0; i < list.length; i++){
        if(list[i].name === obj.name){
          check = false
          setList(
            oldList => {
              const newList = oldList.map((item) => {
                if(item.name === obj.name){
                  return {name: item.name, count: item.count + obj.count}
                }
                else{
                  return item;
                }
              })
              return newList;
            }
          )
        }
      }
      if(check){
        setList(newList => [...newList, obj])
      }
    }else{
      setList(newList => [...newList, obj])
    }
  }
  return (
    <Router>
      <header className="banner">
        <h1>Shopping Cart</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="shopping-cart/">Home</Link>
          </li>
          <li>
            <Link to="shopping-cart/cart">Shop</Link>
          </li>
          <li>
            <Link to="shopping-cart/checkout" className="once"> <p>Checkout</p> <p className="list">{list.length}</p> </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="shopping-cart/">
          <Main/>
        </Route>
        <Route path="shopping-cart/cart">
          <Cart callback={update}/>
        </Route>
        <Route path="shopping-cart/checkout">
          <Checkout list={list}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
