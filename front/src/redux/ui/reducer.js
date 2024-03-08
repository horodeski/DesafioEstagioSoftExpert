import uiState from "./initialState";
import uiTypes from "./types";


const uiReducer = (state = uiState, action) => {
    switch (action.type) {
        case uiTypes.SET_MODAL:
            return { ...state, onDisplay: false };
        default:
            return state;
    }
};
 
export default uiReducer;