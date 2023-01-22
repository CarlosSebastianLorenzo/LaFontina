import { createAction } from "@reduxjs/toolkit";


export const openCloseCartAction = createAction('openCloseCartAction', ()=>{
    return {
        payload : {}
    }
});

export const addToCartAction = createAction('addToShoppingCartAction', (article)=>{
    return {
        payload : {
            ...article
        }
    }
});

export const removeFromCartAction = createAction('removeOfTheShoppingCartAction', (article)=>{
    return {
        payload : {
            ...article
        }
    }
});

export const deleteFromCartAction = createAction('clearShoppingCartAction', (article)=>{
    return {
        payload : {
            ...article
        }
    }
});