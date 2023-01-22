import { configureStore } from "@reduxjs/toolkit";
import { getProductsReducer } from "./Reducers/productsReducers";
import { shoppingCartReducer } from "./Reducers/shoppingCartReducer";

const store = configureStore({
    reducer: {
        getProductsReducer : getProductsReducer,
        shoppingCartReducer: shoppingCartReducer
    }
})

export default store