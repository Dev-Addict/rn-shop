import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import ordersReducer from "./ordersReducer";
import errorReducer from "./errorReducer";
import isLoadingReducer from "./isLoadingReducer";

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    error: errorReducer,
    isLoading: isLoadingReducer,
    form: formReducer
});