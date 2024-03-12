import { combineReducers } from "redux";

import uiReducer from "./ui/reducer";
import FCReducer from "./CartFavorite/reducer";

const rootReducer = combineReducers({ uiReducer, FCReducer });

export default rootReducer;