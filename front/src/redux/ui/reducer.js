import { uiState } from "./initialState";
import { uiTypes } from "./types";

const uiReducer = (state = uiState, action) => {
    switch (action.type) {
        case uiTypes.SET_MODAL_REGISTER:
            return { ...state, isOpenModalRegister: action.payload };
        case uiTypes.SET_MODAL_CART:
            return { ...state, isOpenModalCart: action.payload };
        case uiTypes.SET_MODAL_FAVORITE:
            return { ...state, isOpenModalFavorite: action.payload };
        default:
            return state;
    }
};

export default uiReducer;