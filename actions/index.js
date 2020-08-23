import {SET_PRODUCTS} from "./types";
import {PRODUCTS} from "../data";

export const getProducts = () => async (dispatch) => {
    dispatch({
        type: SET_PRODUCTS,
        payload: PRODUCTS
    })
};