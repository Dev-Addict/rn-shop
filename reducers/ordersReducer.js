import {CREATE_ORDER_ACTION_TYPE, SET_ORDERS_ACTION_TYPE} from "../actions/types";

const ordersReducer = (state = [], action) => {
    if (action.type === SET_ORDERS_ACTION_TYPE)
        return action.payload;
    if (action.type === CREATE_ORDER_ACTION_TYPE)
        return [...state, action.payload];
    return state;
};

export default ordersReducer;