import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
}

export const addcartSlice = createSlice({
    name:'addcart',
    initialState,
    reducers:{
        addToCart:(state, action) => {
            if(!state.items.includes(action.payload)){
                state.items.push(action.payload)
            }
           
        },
    
        removeToCart:(state, action) =>{
           state.items = state.items.filter((id) => id !== action,payload)
        },
    
       
    }
})

export const {addToCart, removeToCart} = addcartSlice.actions
export default addcartSlice.reducer