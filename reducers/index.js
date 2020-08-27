import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import ordersReducer from "./ordersReducer";

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    form: formReducer
});