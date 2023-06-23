import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART, UPDATE_TOTAL } from './constants';

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};

export const updateCart = (productId, quantity) => {
    return {
        type: UPDATE_CART,
        payload: { productId, quantity },
    };
};

export const deleteFromCart = (productId) => {
    return {
        type: DELETE_FROM_CART,
        payload: productId,
    };
};

export const updateTotal = (cart) => {
    return {
        type: UPDATE_TOTAL,
        payload: cart,
    };
};
