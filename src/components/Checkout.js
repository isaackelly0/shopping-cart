import './Checkout.css';
import Catalog from './Catalog';
const Checkout = (props) => {
    return(
        <div>
            {props.list.map(item=>{return(<Catalog pic={item.pic} name={item.name} count={item.count} />)})}
        </div>
    )
}
export default Checkout;