import Item from "./Item";
const Cart = (props) => {
    return(
        <div>
            <Item name="sugar" callback={props.callback}/>
        </div>
    )
}
export default Cart;