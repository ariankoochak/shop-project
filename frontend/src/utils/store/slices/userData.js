import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
};

export const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = { ...action.payload };
        },
        resetUserData: (state) => {
            state.userData = {};
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserData, resetUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
