import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsNum: localStorage.getItem("cart-products") ? JSON.parse(localStorage.getItem("cart-products")).length : 0,

    products:  JSON.parse(localStorage.getItem("cart-products")) || [],

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.productsNum = state.productsNum + 1,
            state.products.push(action.payload)
            localStorage.setItem("cart-products", JSON.stringify(state.products))
        },
        removeFromCart: (state, action) => {
            state.productsNum = state.productsNum - 1
            state.products = state.products.filter((item) => item.id !== action.payload)
            localStorage.setItem("cart-products", JSON.stringify(state.products))
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer