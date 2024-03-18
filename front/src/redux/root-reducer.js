import { combineReducers } from "redux";

import uiReducer from "./ui/reducer";
import CartReducer from "./Cart/reducer";

const rootReducer = combineReducers({ uiReducer, CartReducer });

export default rootReducer;