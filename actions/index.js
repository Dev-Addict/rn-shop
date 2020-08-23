import {SET_PRODUCTS_ACTION_TYPE} from "./types";
import {PRODUCTS} from "../data";

export const getProducts = () => async (dispatch) => {
    dispatch({
        type: SET_PRODUCTS_ACTION_TYPE,
        payload: PRODUCTS
    })
};