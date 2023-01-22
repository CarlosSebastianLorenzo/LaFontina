import { createReducer } from "@reduxjs/toolkit";
import { addToCartAction, openCloseCartAction, removeFromCartAction, deleteFromCartAction} from "../Actions/shoppingCartActions.js";

const initialState = {
    articles: [],
    total: 0,
    quantity: 0,
    hidden: true
}

export const shoppingCartReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(openCloseCartAction, (store)=>{
            return {
                ...store,
                hidden: !store.hidden
            }
        })
        .addCase(addToCartAction, (store, action)=>{

            const newItem = action.payload

            const itemIndex = store.articles.findIndex((e) => e._id === newItem._id);
            
            let newArticles = []
            
            const storeFiltered = store.articles.filter((e) => e._id !== newItem._id)

            if (itemIndex !== -1) {
                const newItem = { ...store.articles[itemIndex] }
                newItem.quantity++;
                storeFiltered.splice(itemIndex, 0, newItem);
                newArticles = [...storeFiltered]
            } else {
                newItem.quantity = 1
                newArticles = [newItem, ...store.articles]
            }

            return {
                ...store,
                articles: newArticles,
                total: store.total + newItem.price,
                quantity: store.quantity + 1,
                hidden: false
            }
        })
        .addCase(removeFromCartAction, (store, action)=>{
            
            const ItemToRemove = action.payload

            const itemIndex = store.articles.findIndex((e) => e._id === ItemToRemove._id);
            
            const storeFiltered = store.articles.filter((e) => e._id !== ItemToRemove._id)

            if (ItemToRemove.quantity > 1) {
                ItemToRemove.quantity--;
                storeFiltered.splice(itemIndex, 0, ItemToRemove);
            }
            
            return{
                ...store,
                articles: [...storeFiltered],
                total: store.total - ItemToRemove.price,
                quantity: store.quantity - 1
            }
        })
        .addCase(deleteFromCartAction, (store, action)=>{
            
            const DeletedItem = action.payload

            const storeFiltered = store.articles.filter((e) => e._id !== DeletedItem._id)
            
            return{
                ...store,
                articles: [...storeFiltered],
                total: store.total - (DeletedItem.quantity * DeletedItem.price),
                quantity: store.quantity - DeletedItem.quantity
            }
        })
})