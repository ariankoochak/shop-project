import { configureStore } from "@reduxjs/toolkit";
import userData from "./slices/userData";
import openProductData  from "./slices/openProductData";

export const store = configureStore({
    reducer: {
        userData: userData,
        openProductData: openProductData,
    },
});
