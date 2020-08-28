import {ERROR_ACTION_TYPE} from "../actions/types";

const errorReducer = (state, action) => {
    if (action.type === ERROR_ACTION_TYPE)
        return action.payload;
    return '';
};

export default errorReducer;