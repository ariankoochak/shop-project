import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openProductData: {},
};

export const openProductDataSlice = createSlice({
    name: "openProductData",
    initialState,
    reducers: {
        setOpenProductData: (state, action) => {
            state.openProductData = { ...action.payload };
        },
        resetOpenProductData: (state) => {
            state.openProductData = {};
        },
    },
});

// Action creators are generated for each case reducer function
export const { setOpenProductData, resetOpenProductData } =
    openProductDataSlice.actions;

export default openProductDataSlice.reducer;
