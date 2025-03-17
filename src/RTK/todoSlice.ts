import { createSlice ,
    //  PayloadAction
     } from "@reduxjs/toolkit";
 
type statetype = {
    list: listitem[];
    done: boolean;
};

type listitem = {
    id: number;
    title: string;
    done: boolean;
};


const initialState: statetype = {
        list: [],
        done: false
    };



const todoSlice = createSlice({
    name: "todoo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
        state.list.push(action.payload);
        },
        checked: (state, action) => {
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            state.list.map((item: any) => {
                if (item.id === action.payload) {
                    // if (item.done) {
                    //     item.done = false;
                    // } else {
                    //     item.done = true;
                    // }
                    item.done = !item.done;
                }


            }
            );
        }

,
        deleteo: (state, action) => {
            state.list = state.list.filter((item) => item.id !== action.payload);
        }
    }
});


export const { addTodo, checked,deleteo } = todoSlice.actions;
export default todoSlice.reducer;