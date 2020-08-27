import {
    CREATE_PRODUCT_ACTION_TYPE,
    DELETE_PRODUCT_ACTION_TYPE,
    EDIT_PRODUCT_ACTION_TYPE,
    SET_PRODUCTS_ACTION_TYPE
} from "../actions/types";

const productsReducer = (state = [], action) => {
    if (action.type === SET_PRODUCTS_ACTION_TYPE)
        return action.payload;
    if (action.type === DELETE_PRODUCT_ACTION_TYPE)
        return [...state.removeIf(({id}) => id === action.payload)];
    if (action.type === EDIT_PRODUCT_ACTION_TYPE)
        return [...state.removeIf(({id}) => id === action.payload.id), action.payload];
    if (action.type === CREATE_PRODUCT_ACTION_TYPE)
        return [...state, action.payload];
    return state;
};

export default productsReducer;