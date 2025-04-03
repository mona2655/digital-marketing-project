import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    count: 0,
    reducers:{
        addToCart:(state, action) =>{
            if(!state.items.includes(action.payload))
            state.items.push(action.payload);
            state.count = state.items.length;
        },
        removeFromCart:(state) =>{
            if(state.items.length > 0)
            state.items = state.items.filter(id => id !== action.payload )
            state.count = state.items.length;
        },
       
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export const cartReducer =  cartSlice.reducer