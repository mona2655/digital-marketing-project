import {configureStore} from '@reduxjs/toolkit'
import addcartReducer from './addcartSlice'
import productsReducer from './productSlice'

export const store = configureStore({
    reducer:{
        addcart: addcartReducer,
        products: productsReducer
    }
})