import {useState} from "react";
import './Item.css';
const Item = (props) => {
    const [stock, setStock] = useState(1);
    const callback = () => {
        props.callback({name: props.name, count: stock, pic: props.pic})
    }
    return(
        <div className="col-lg-2 col-md-3 col-sm-4 item">
            <div className="center">
                <img alt="Product" src={props.pic}/>
            </div>
            <div className="center title">
                <h5>
                {props.name}
                </h5>
            </div>
            <section className="increment">
                <button className="btn btn-primary title" onClick={() => setStock(stock - 1)}>-</button>
                    <p>
                    {stock}
                    </p>
                <button className="btn btn-primary title" onClick={() => setStock(stock + 1)}>+</button>
            </section>
            <div className="center">
                <button className="btn btn-primary title" onClick={() => callback()}>Add to cart</button>
            </div>
        
        </div>
    )
}
export default Item;
//<button onClick={increment(true)}>UP</button>
  //      <button  onClick={increment(false)}>Down</button>