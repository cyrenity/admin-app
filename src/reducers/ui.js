
import { API_START, API_FINISH } from "../constants/actionTypes";

const uiReducer = (state = { pendingRequests: 0 }, action) => {
    switch (action.type) {
        case API_START:
            return Object.assign({}, state, { pendingRequests: state.pendingRequests + 1, label: action.payload.label });
        
        case API_FINISH:
            return Object.assign({}, state, { pendingRequests: state.pendingRequests - 1, label: action.payload.label });
        default:
            return state;
    }
};


export default uiReducer;