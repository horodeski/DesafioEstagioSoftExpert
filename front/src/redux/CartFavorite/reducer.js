import { bindActionCreators } from "redux";
import { CartState } from "./initialState";
import { cartTypes } from "./types";
import products from "../../services/products";

const FCReducer = (state = CartState, action) => {
    switch (action.type) {
        case cartTypes.ADD_TO_CART: {
            const verify = state.products.some((i) => i.code == action.payload.code);
            if (verify) {
                console.log(action.payload.amount)
                return {
                    ...state,
                    products: state.products.map((product) =>
                        product.code === action.payload.code
                            ? { ...product, amount: product.amount + action.payload.amount }
                            : product
                    ),
                };
            }

            return { ...state, products: [...state.products, action.payload] };
        }
        case cartTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.code !== action.payload
                ),
            };
        case cartTypes.CHANGES_TOTAL:
            return {
                ...state,
                totalCart: [action.payload],
            };
        case cartTypes.CHANGES_FINAL_VALUE:
            return {
                ...state,
                totalFinal: [action.payload],
            };
        case cartTypes.CHANGES_TAX:
            return {
                ...state,
                tax: [action.payload],
            };
        default:
            return state;
    }
};

export default FCReducer;
