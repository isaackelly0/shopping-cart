import './Checkout.css';
const Checkout = (props) => {
    return(
        <div>
            {props.list.map(item=>{return(<p>{item.name} {item.count}</p>)})}
        </div>
    )
}
export default Checkout;