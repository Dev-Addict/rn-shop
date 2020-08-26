import {CREATE_ORDER_ACTION_TYPE} from "../actions/types";

const ordersReducer = (state = [], action) => {
    if (action.type === CREATE_ORDER_ACTION_TYPE)
        return [...state, action.payload];
    return state;
};

export default ordersReducer;