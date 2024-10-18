import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openProductData: {},
};

export const openProductDataSlice = createSlice({
    name: "openProductData",
    initialState,
    reducers: {
        setOpenProductData: (state, action) => {
            state.userData = { ...action.payload };
        },
        resetOpenProductData: (state) => {
            state.userData = {};
        },
    },
});

// Action creators are generated for each case reducer function
export const { setOpenProductData, resetOpenProductData } =
    openProductDataSlice.actions;

export default openProductDataSlice.reducer;
