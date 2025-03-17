import { useSelector } from "react-redux";
import { RootState } from "../RTK/store"; // Adjust the import path as necessary

const Items = () => {
    const item = useSelector((state: RootState) => state.todo.list);
    return ( 
    <>
    {
        item.map((item, index) => {
            return (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.done ? "Done" : "Not Done"}</p>
                </div>
            );
    
    })
    }
    </> );
}
 
export default Items;