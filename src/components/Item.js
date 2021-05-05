import {useState} from "react";
import './Item.css';
const Item = (props) => {
    const [stock, setStock] = useState(1);
    const callback = () => {
        props.callback({name: props.name, count: stock})
    }
    return(
        <div className="col-3">
            <div className="center">
                <img alt="Product picture" src={props.pic}/>
            </div>
            <div className="center">
                <h5>
                {props.name}
                </h5>
            </div>
            <section className="increment">
                <button className="btn btn-primary" onClick={() => setStock(stock - 1)}>-</button>
                    <p>
                    {stock}
                    </p>
                <button className="btn btn-primary" onClick={() => setStock(stock + 1)}>+</button>
            </section>
            <div className="center">
                <button className="btn btn-primary" onClick={() => callback()}>Add to cart</button>
            </div>
        
        </div>
    )
}
export default Item;
//<button onClick={increment(true)}>UP</button>
  //      <button  onClick={increment(false)}>Down</button>