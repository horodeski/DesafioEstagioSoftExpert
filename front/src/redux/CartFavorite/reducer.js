import { CartState } from "./initialState";
import { cartTypes } from "./types";

const FCReducer = (state = CartState, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART: {
      const verify = state.products.some((i) => i.code == action.payload.code);
      if (verify) {
        if (action.payload.amount > 1) {
          return {
            ...state,
            products: state.products.map((product) =>
              product.code === action.payload.code
                ? {
                    ...product,
                    amount: product.amount + action.payload.amount,
                    priceAmount:
                      product.price * (1 + product.amount),
                  }
                : product.amount > 1 && action.payload.amount == 1
                ? {
                    ...product,
                    amount: product.amount + action.payload.amount,
                    priceAmount: product.priceAmount + product.price,
                  }
                : product
            ),
          };
        } else {
          return {
            ...state,
            products: state.products.map((product) =>
              product.code === action.payload.code
                ? {
                    ...product,
                    amount: product.amount + action.payload.amount,
                    priceAmount: product.price + product.price,
                  }
                : product
            ),
          };
        }
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
    case cartTypes.CHANGES_TOTAL_FINAL:
      return {
        ...state,
        totalFinal: [action.payload],
      };
    case cartTypes.CHANGES_TAX:
      return {
        ...state,
        tax: [action.payload],
      };
    case cartTypes.DELETE_ALL: {
      const teste = state.products.splice(0, action.payload);
      return {
        ...state,
        products: [],
      };
    }
    case cartTypes.INCREMENT_AMOUNT: {
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.code == action.payload) {    
              return { ...product, amount: product.amount + 1, priceAmount: (product.amount + 1) * product.price };
          } else {
            return product;
          }
        }),
      };
    }
    default:
      return state;
  }
};

export default FCReducer;
