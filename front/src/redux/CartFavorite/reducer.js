import { CartState } from "./initialState";
import { FCTypes } from "./types";

const FCReducer = (state = CartState, action) => {
    switch (action.type) {
        case FCTypes.ADD_TO_CART:
            return { ...state, cartItem: [...state.cartItem, action.payload] };
        default:
            return state;
    }
};

export default FCReducer;