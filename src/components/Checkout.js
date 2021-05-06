import './Checkout.css';
import Catalog from './Catalog';
const Checkout = (props) => {
    return(
        <div className="row">
            {props.list.map(item=>{return(<Catalog pic={item.pic} name={item.name} count={item.count} />)})}
            <button className="col-1 offset-8 btn btn-secondary">Checkout</button>
        </div>
    )
}
export default Checkout;