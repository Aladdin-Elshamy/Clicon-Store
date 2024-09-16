import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    data: [],
};
export const fetchProducts = createAsyncThunk("productList/fetchProducts", (url = "https://dummyjson.com/products") => {
    return axios.get(url).then((res) => {
        return res.data
    })
})
const productListSlice = createSlice({
    name: "productList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export default productListSlice.reducer