import Item from "./Item";
import './Cart.css';
const Cart = (props) => {
    return(
        <div className="row">
            <Item name="Hammer" callback={props.callback} pic="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT51457/STHT51457_1.jpg"/>
            <Item name="Screwdriver" callback={props.callback} pic="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT60083/STHT60083_1.jpg"/>
            <Item name="Wrench Set" callback={props.callback} pic="https://static.grainger.com/rp/s/is/image/Grainger/38WF39_AS01?hei=536&wid=536" />
            <Item name="butter" callback={props.callback}/>

        </div>
    )
}
export default Cart;