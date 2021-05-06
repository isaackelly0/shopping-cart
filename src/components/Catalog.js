import './Catalog.css';
const Catalog = (props) => {
    // const [list, setList] = useState([])
    // setList(newList => [...newList, obj])
    // console.log(list);
    return(
        <div className="liner">
            <img alt="Yp" src={props.pic}/>
            <p>{props.name}</p>
            <p>{props.count}</p>
        </div>
    )
}
export default Catalog;