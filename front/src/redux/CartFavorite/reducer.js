import { CartState } from "./initialState";
import { cartTypes } from "./types";

const FCReducer = (state = CartState, action) => {
    switch (action.type) {
        case cartTypes.ADD_TO_CART:
            return { ...state, products: [...state.products, action.payload] };
        case cartTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.code !== action.payload),
            }
        case cartTypes.CHANGES_TOTAL:
            return {
                ...state,
                totalCart: [action.payload]
            }
        case cartTypes.CHANGES_FINAL_VALUE:
            return {
                ...state,
                totalFinal: [action.payload]
            }
        case cartTypes.CHANGES_TAX:
            return {
                ...state,
                tax: [action.payload]
            }
        default:
            return state;
    }
};

export default FCReducer;