import { createSlice ,
    //  PayloadAction
     } from "@reduxjs/toolkit";
 
type statetype = {
    list: object[];
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
    }
});


export const { addTodo, checked } = todoSlice.actions;
export default todoSlice.reducer;