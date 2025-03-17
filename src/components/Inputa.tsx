import { useState } from "react";
import { addTodo } from "../RTK/todoSlice";
import { useDispatch } from "react-redux";

const Inputa = () => {

    const [val,setval]=useState('');
    const dispatch = useDispatch();

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const handlesub=(e:any)=>{
        e.preventDefault();
     if(val){
       dispatch(addTodo({
        id:Date.now(),
         title:val,
         done:false
       }))
     }
    }
  return (
    <>
    <form action="" onSubmit={handlesub}>
    <input
        type="text"
        placeholder="Start Writing here..."
        className="text-pink-600 font-bold border rounded-full border-pink-300 p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        value={val}
        onChange={(e) => setval(e.target.value)}
      />
      <button
        type="submit"
        className=" rounded-full font-semibold py-2 px-4 bg-pink-500 text-white p-2 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600"
      >
        Add Note
      </button>





    </form>
    </>
  );
};

export default Inputa;
