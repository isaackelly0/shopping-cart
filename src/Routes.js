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
    if(list.length){
      for(let i = 0; i < list.length; i++){
        if(list[i].name === obj.name){
          // alert("hi")
          setList(
            oldList => {
              const newList = oldList.map((item) => {
                if(item.name === obj.name){
                  // let newItem = 
                  return {name: item.name, count: item.count + obj.count}
                  // return (item.count + obj.count);
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
    }else{
      setList(newList => [...newList, obj])
    }
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
            <Link to="/checkout">Checkout {list.length}</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/cart">
          <Cart callback={update}/>
        </Route>
        <Route path="/checkout">
          <Checkout list={list}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
