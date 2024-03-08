import { combineReducers } from "redux";

import uiReducer from "./ui/reducer";

const rootReducer = combineReducers({ uiReducer });

export default rootReducer;