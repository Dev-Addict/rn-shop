import {SET_LOADING_ACTION_TYPE} from "../actions/types";

const isLoadingReducer = (state = false, action) => {
    if (action.type === SET_LOADING_ACTION_TYPE)
        return action.payload;
    return state;
};

export default isLoadingReducer;