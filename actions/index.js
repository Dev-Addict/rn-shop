import rnshop from "../apis/rnshop";
import {
    ADD_PRODUCT_TO_CART_ACTION_TYPE,
    CREATE_ORDER_ACTION_TYPE, CREATE_PRODUCT_ACTION_TYPE,
    DELETE_PRODUCT_ACTION_TYPE,
    EDIT_PRODUCT_ACTION_TYPE,
    EMPTY_CART_ACTION_TYPE, ERROR_ACTION_TYPE,
    REMOVE_ONE_PRODUCT_FROM_CART_ACTION_TYPE,
    REMOVE_PRODUCT_FROM_CART_ACTION_TYPE, SET_LOADING_ACTION_TYPE,
    SET_PRODUCTS_ACTION_TYPE
} from "./types";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: SET_LOADING_ACTION_TYPE,
            payload: true
        });

        const res = await rnshop.get('/products.json');

        dispatch({
            type: SET_PRODUCTS_ACTION_TYPE,
            payload: Object.entries(res.data).map(([key, value]) => ({...value, id: key}))
        });
    } catch (err) {
        dispatch({
            type: ERROR_ACTION_TYPE,
            payload: err.response.data
        });

    }

    dispatch({
        type: SET_LOADING_ACTION_TYPE,
        payload: false
    });
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

export const createProduct = (product) => async dispatch => {
    try {
        dispatch({
            type: SET_LOADING_ACTION_TYPE,
            payload: true
        });

        const res = await rnshop.post('products.json', product);

        product.id = res.data.name;

        dispatch({
            type: CREATE_PRODUCT_ACTION_TYPE,
            payload: product
        });
    } catch (err) {
        dispatch({
            type: ERROR_ACTION_TYPE,
            payload: 'Something went wrong.'
        });
    }

    dispatch({
        type: SET_LOADING_ACTION_TYPE,
        payload: false
    });
};

export const removeError = () => ({
    type: ERROR_ACTION_TYPE,
    payload: ''
});