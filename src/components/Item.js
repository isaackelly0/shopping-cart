import {useState} from "react";
const Item = (props) => {
    const [stock, setStock] = useState(1);
    const callback = () => {
        props.callback({name: props.name, count: stock})
    }
    return(
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {stock}
            </div>
            <button onClick={() => setStock(stock + 1)}>UP</button>
            <button onClick={() => setStock(stock - 1)}>Down</button>
            <button onClick={() => callback()}>Buy</button>
        
        </div>
    )
}
export default Item;
//<button onClick={increment(true)}>UP</button>
  //      <button  onClick={increment(false)}>Down</button>