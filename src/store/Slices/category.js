import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "All",
}


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        }
    }
})
export default categorySlice.reducer
export const { setCategory } = categorySlice.actions