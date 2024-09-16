import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./Slices/productList";
import cartReducer from "./Slices/cart";
export const store = configureStore({
    reducer: {
        productList: productListReducer,
        cart: cartReducer

    },
})