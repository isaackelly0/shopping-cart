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
            <Item name="Drill" callback={props.callback} pic="http://images.lowes.com/product/converted/885911/885911548731_10105642.jpg" />
            <Item name="Tool Belt" callback={props.callback} pic="https://hw.menardc.com/main/items/media/PHALA001/ProductLarge/2463519MF-303-41000x1000.jpg" />         
            <Item name="Helmet" callback={props.callback} pic="https://sc04.alicdn.com/kf/UTB8rclHcdoSdeJk43Owq6ya4XXaW.jpg" />
            <Item name="Gloves" callback={props.callback} pic="https://cdn11.bigcommerce.com/s-spvlr46b73/images/stencil/500x659/products/538/1744/apigd7doo__39183.1605838637.jpg?c=1" />
        </div>
    )
}
export default Cart;