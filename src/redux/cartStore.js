import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'
import wishListReducer from './slices/wishlistSlice'
import cartReducer from './slices/cartSlice'

const productStore=configureStore({
    reducer:{
        productReducer,
        wishListReducer,
        cartReducer
    }
})


export default productStore
