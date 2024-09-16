import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./Slices/productList";
import cartReducer from "./Slices/cart";
import categoryReducer from "./Slices/category";
export const store = configureStore({
    reducer: {
        productList: productListReducer,
        cart: cartReducer,
        category: categoryReducer
    },
})