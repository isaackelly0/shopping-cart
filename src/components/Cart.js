import Item from "./Item";
import './Cart.css';
const Cart = (props) => {
    return(
        <div className="row">
            <Item name="Hammer" callback={props.callback} pic="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT51457/STHT51457_1.jpg"/>
            <Item name="Screwdriver" callback={props.callback} pic="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT60083/STHT60083_1.jpg"/>
            <Item name="Wrench Set" callback={props.callback} pic="https://static.grainger.com/rp/s/is/image/Grainger/38WF39_AS01?hei=536&wid=536" />
            <Item name="Saw" callback={props.callback} pic="https://img.misterworker.com/en/37374-thickbox_default/tradecut-wood-saw.jpg"/>
            <Item name="Measuring Tape" callback={props.callback} pic="https://images-na.ssl-images-amazon.com/images/I/61cRvs9F2cL._AC_SL1000_.jpg" />
            <Item name="Plyers" callback={props.callback} pic="https://i.ebayimg.com/images/g/-QkAAOSwoxVdXTzd/s-l400.jpg" />

        </div>
    )
}
export default Cart;
/* <Item name="" callback={props.callback} pic="" /> */
