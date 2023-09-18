import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import apiURL from "../../Utils/apiUrl.js";
//const localApiURL = "src/Utils/Products.json"
import axios from "axios";


export const getProducts = createAsyncThunk('getProducts', async (category)=>{
    try {
        let products = await axios.get(apiURL+'products');
        console.log("hizo un fetch")
        return {
            array : products.data.response,
            category : category
        }
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
});

export const productsByCategory = createAction('productsByCategory', (category)=>{
    return {
        payload : {
            category: category
        }
    }
});

export const filterProductsAction = createAction('filterProductsAction', (classes, searchMatches)=>{
    return {
        payload : {
            classes: [...classes],
            searchMatches: searchMatches
        }
    }
});

export const sortProductsAction = createAction('sortProducts', (field, order)=>{
    return {
        payload : {
            field: field,
            order: order
        }
    }
});