import {SET_PRODUCTS_ACTION_TYPE} from "../actions/types";

const productsReducer = (state = [], action) => {
    if (action.type === SET_PRODUCTS_ACTION_TYPE)
        return action.payload;
    return state;
};

export default productsReducer;