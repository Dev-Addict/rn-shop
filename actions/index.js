import {
    ADD_PRODUCT_TO_CART_ACTION_TYPE,
    REMOVE_ONE_PRODUCT_FROM_CART_ACTION_TYPE, REMOVE_PRODUCT_FROM_CART_ACTION_TYPE,
    SET_PRODUCTS_ACTION_TYPE
} from "./types";
import {PRODUCTS} from "../data";

export const getProducts = () => async (dispatch) => {
    dispatch({
        type: SET_PRODUCTS_ACTION_TYPE,
        payload: PRODUCTS
    })
};

export const addProductToCart = (id) => ({
    type: ADD_PRODUCT_TO_CART_ACTION_TYPE,
    payload: id
});

export const removeOneProductFromCart = (id) => ({
    type: REMOVE_ONE_PRODUCT_FROM_CART_ACTION_TYPE,
    payload: id
});

export const removeProductFromCart = (id) => ({
    type: REMOVE_PRODUCT_FROM_CART_ACTION_TYPE,
    payload: id
});