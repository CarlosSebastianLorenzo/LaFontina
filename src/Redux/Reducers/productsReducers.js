import { createReducer } from "@reduxjs/toolkit";
import { getProducts, productsByCategory, filterProductsAction, sortProductsAction } from "../Actions/productsActions.js";
import { filterByClass, filterBySearch  } from "../../Utils/filterProducts.js";
import sortProducts from "../../Utils/sortProducts.js";

const initialState = {
    allProducts : [],
    productsByCategory : [],
    filteredProducts : [],
    productClasses : []
}

export const getProductsReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(getProducts.pending,(store)=>{
            return {
                ...store,
                    allProducts : [],
                    productsByCategory : [],
                    filteredProducts : [],
                    productClasses : []
            }
        })
        .addCase(getProducts.fulfilled,(store,action)=>{
            let array = action.payload.array
            const filteredArray = array.filter(e => e.category.title == action.payload.category)
            const haveClass = filteredArray.filter(e => e.class)
            const classes = haveClass.map(e => e.class)
            const classesWithoutRepeated = [...new Set(classes)]
            console.log("asyncthunk")

            return {
                ...store,
                allProducts: array,
                productsByCategory: filteredArray,
                filteredProducts: filteredArray,
                productClasses : classesWithoutRepeated
            }
        })
        .addCase(productsByCategory, (store,action)=>{
            const filteredArray = store.allProducts.filter(e => e.category.title == action.payload.category)
            const haveClass = filteredArray.filter(e => e.class)
            const classes = haveClass.map(e => e.class)
            const classesWithoutRepeated = [...new Set(classes)]

            console.log("action")
            return {
                ...store,
                productsByCategory: filteredArray,
                filteredProducts: filteredArray,
                productClasses : classesWithoutRepeated
            }
        })
        .addCase(filterProductsAction, (store,action)=>{

            const filteredByClass = filterByClass(store.productsByCategory, action.payload.classes)
        
            const filteredArray = filterBySearch(filteredByClass, action.payload.searchMatches)

            return {
                ...store,
                filteredProducts: filteredArray
            }
        })
        .addCase(sortProductsAction, (store,action)=>{

            const sortedArray = sortProducts(store.filteredProducts, action.payload.field, action.payload.order)

            return {
                ...store,
                filteredProducts: sortedArray
            }
        })
    })