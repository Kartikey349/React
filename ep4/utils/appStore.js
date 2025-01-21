import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const appStore = configureStore({
    //this reducer is responsible for modifying the appStore
    reducer: {
        cart: cartReducer
    }
});