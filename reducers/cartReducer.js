import {
    ADD_PRODUCT_TO_CART_ACTION_TYPE,
    REMOVE_ONE_PRODUCT_FROM_CART_ACTION_TYPE,
    REMOVE_PRODUCT_FROM_CART_ACTION_TYPE
} from "../actions/types";

const cartReducer = (state = [], action) => {
    if (action.type === ADD_PRODUCT_TO_CART_ACTION_TYPE)
        return [...state, action.payload];
    if (action.type === REMOVE_ONE_PRODUCT_FROM_CART_ACTION_TYPE)
        return [...state.removeOneIf((id) => id === action.payload)];
    if (action.type === REMOVE_PRODUCT_FROM_CART_ACTION_TYPE)
        return [...state.removeIf((id) => id === action.payload)];
    return state;
};

export default cartReducer;