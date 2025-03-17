import {
     useDispatch,
     useSelector } from "react-redux";
import { RootState } from "../RTK/store"; // Adjust the import path as necessary
import { checked } from "../RTK/todoSlice";

const Items = () => {
    const item = useSelector((state: RootState) => state.todo.list);
const dispatch = useDispatch();

    const handlecheck = (e:number) => {
        // console.log("checked");
        dispatch(checked(e));
    };

    return ( 
    <>
    {
        item.map((item, index) => {
            return (
                <div key={index} 
                className="flex justify-between items-center border-b-2 border-pink-500 p-2"
                >
                    <label className={`${item.done?"line-through":""} text-pink-700`}>
                        <input type="checkbox" name="" id="" 
                        onClick={()=>handlecheck(item.id)}
                        />
                        {item.title}
                    </label>
               
                 
                  </div>
            );
    
    })
    }
    </> );
}
 
export default Items;