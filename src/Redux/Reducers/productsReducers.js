import { createReducer } from "@reduxjs/toolkit";
import { getProducts, productsByCategory, filterProductsAction, sortProductsAction } from "../Actions/productsActions.js";
import { filterByClass, filterBySearch  } from "../../Utils/filterProducts.js";
import sortProducts from "../../Utils/sortProducts.js";

const initialState = {
    allProducts : [],
    productsByCategory : [],
    filteredProducts : [],
    productClasses : [],
    loading: false,
    sortedProductsBy: {
        field: "Precio",
        order: "asc"
    }
}

export const getProductsReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(getProducts.pending,(store)=>{
            return {
                ...store,
                loading: true
            }
        })
        .addCase(getProducts.rejected,(store)=>{
            return {
                ...store,
                loading: false
            }
        })
        .addCase(getProducts.fulfilled,(store,action)=>{

            let array = action.payload.array
            const filteredArray = array.filter(e => e.category.title == action.payload.category)

            const sortedArray = sortProducts(filteredArray, store.sortedProductsBy.field, store.sortedProductsBy.order)

            const haveClass = filteredArray.filter(e => e.class)
            const classes = haveClass.map(e => e.class)
            const classesWithoutRepeated = [...new Set(classes)]

            return {
                ...store,
                allProducts: array,
                productsByCategory: sortedArray,
                filteredProducts: sortedArray,
                productClasses : classesWithoutRepeated,
                loading: false
            }
        })
        .addCase(productsByCategory, (store,action)=>{
            const filteredArray = store.allProducts.filter(e => e.category.title == action.payload.category)

            const sortedArray = sortProducts(filteredArray, store.sortedProductsBy.field, store.sortedProductsBy.order)

            const haveClass = filteredArray.filter(e => e.class)
            const classes = haveClass.map(e => e.class)
            const classesWithoutRepeated = [...new Set(classes)]

            return {
                ...store,
                productsByCategory: sortedArray,
                filteredProducts: sortedArray,
                productClasses : classesWithoutRepeated
            }
        })
        .addCase(filterProductsAction, (store,action)=>{

            const filteredByClass = filterByClass(store.productsByCategory, action.payload.classes)
        
            const filteredArray = filterBySearch(filteredByClass, action.payload.searchMatches)

            const sortedArray = sortProducts(filteredArray, store.sortedProductsBy.field, store.sortedProductsBy.order)

            return {
                ...store,
                filteredProducts: sortedArray
            }
        })
        .addCase(sortProductsAction, (store,action)=>{

            const sortedArray = sortProducts(store.filteredProducts, action.payload.field, action.payload.order)

            return {
                ...store,
                filteredProducts: sortedArray,
                sortedProductsBy: {
                    field: action.payload.field,
                    order: action.payload.order
                }
            }
        })
    })