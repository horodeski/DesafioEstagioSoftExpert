import {uiTypes} from "./types";

export const setModalRegister = (payload) => ({
    type: uiTypes.SET_MODAL_REGISTER,
    payload
});

export const setModalCart = (payload) => ({
    type: uiTypes.SET_MODAL_CART,
    payload
});

export const setModalMoreInfo = (payload) => ({
    type: uiTypes.SET_MODAL_MORE_INFO,
    payload
});
