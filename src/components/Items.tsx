import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { checked, deleteo } from "../RTK/todoSlice";
import { AiOutlineClose } from "react-icons/ai";

const Items = () => {
  const items = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch();

  const handleCheck = (id: number) => {
    dispatch(checked(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteo(id));
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center border-b-2 border-pink-500 p-2"
          >
            <label
              className={`${item.done ? "line-through" : ""} text-pink-700`}
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={item.done}
                onChange={() => handleCheck(item.id)}
              />
              {item.title}
            </label>
            <AiOutlineClose
              className="text-pink-700 bg-slate-200 rounded-full cursor-pointer"
              onClick={() => handleDelete(item.id)}
            />
          </div>
        );
      })}
    </>
  );
};

export default Items;
