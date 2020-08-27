import {
    ADD_PRODUCT_TO_CART_ACTION_TYPE,
    CREATE_ORDER_ACTION_TYPE, CREATE_PRODUCT_ACTION_TYPE,
    DELETE_PRODUCT_ACTION_TYPE,
    EDIT_PRODUCT_ACTION_TYPE,
    EMPTY_CART_ACTION_TYPE,
    REMOVE_ONE_PRODUCT_FROM_CART_ACTION_TYPE,
    REMOVE_PRODUCT_FROM_CART_ACTION_TYPE,
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

export const emptyCart = () => ({
    type: EMPTY_CART_ACTION_TYPE
});

export const createOrder = (order) => ({
    type: CREATE_ORDER_ACTION_TYPE,
    payload: order
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT_ACTION_TYPE,
    payload: id
});

export const editProduct = (product) => ({
    type: EDIT_PRODUCT_ACTION_TYPE,
    payload: product
});

export const createProduct = (product) => ({
    type: CREATE_PRODUCT_ACTION_TYPE,
    payload: product
});