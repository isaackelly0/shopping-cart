import {useState} from "react";
const Catalog = (obj) => {
    const [list, setList] = useState([])
    setList(newList => [...newList, obj])
    console.log(list);
}
export default Catalog;