import { configureStore } from "@reduxjs/toolkit";
import { getProductsReducer } from "./Reducers/productsReducers";

const store = configureStore({
    reducer: {
        getProductsReducer : getProductsReducer
    }
})

export default store