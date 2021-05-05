import Item from "./Item";
import './Cart.css';
const Cart = (props) => {
    return(
        <div className="row">
            <Item name="sugar" callback={props.callback}/>
            <Item name="milk" callback={props.callback}/>
            <Item name="eggs" callback={props.callback}/>
            <Item name="butter" callback={props.callback}/>

        </div>
    )
}
export default Cart;