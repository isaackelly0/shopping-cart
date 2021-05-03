import Item from "./Item";
import './Item.css';
const Cart = (props) => {
    return(
        <div>
            <Item name="sugar" callback={props.callback}/>
            <Item name="milk" callback={props.callback}/>
            <Item name="eggs" callback={props.callback}/>
            <Item name="butter" callback={props.callback}/>

        </div>
    )
}
export default Cart;