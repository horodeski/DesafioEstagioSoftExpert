import { cartTypes } from "./types";

export const addToCart = (payload) => ({
    type: cartTypes.ADD_TO_CART,
    payload
});

export const removeItem = (payload) => ({
    type: cartTypes.REMOVE_PRODUCT,
    payload
});

export const changesTotal = (payload) => ({
    type: cartTypes.CHANGES_TOTAL,
    payload
});

export const changesTax = (payload) => ({
    type: cartTypes.CHANGES_TAX,
    payload
});


export const changesTotalFinal = (payload) => ({
    type: cartTypes.CHANGES_TOTAL_FINAL,
    payload
});

export const deleteAll = (payload) => ({
    type: cartTypes.DELETE_ALL,
    payload
});


export const incrementAmount = (payload) => ({
    type: cartTypes.INCREMENT_AMOUNT,
    payload
});
