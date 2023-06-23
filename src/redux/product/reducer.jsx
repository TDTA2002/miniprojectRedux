import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART, UPDATE_TOTAL } from './constants';


const initialState = {
    products: [],
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newProduct = action.payload;
            const existingProduct = state.cart.find((product) => product.id === newProduct.id);
            if (existingProduct) {
                const updatedCart = state.cart.map((product) => {
                    if (product.id === newProduct.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                            total: product.price * (product.quantity + 1),
                        };
                    }
                    return product;
                });
                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                newProduct.quantity = 1;
                newProduct.total = newProduct.price;
                return {
                    ...state,
                    cart: [...state.cart, newProduct],
                };
            }

        case UPDATE_CART:
            const { productId, quantity } = action.payload;
            return {
                ...state,
                cart: state.cart.map((product) => {
                    if (product.id === productId) {
                                return {
                            ...product,
                            quantity: quantity,
                            total: product.price * quantity,
                        };
                    }
                    return product;
                }),
            };
        case DELETE_FROM_CART:
            const deletedProductId = action.payload;
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== deletedProductId),
            };
        case UPDATE_TOTAL:
            const total = state.cart.reduce((acc, product) => {
                return acc + product.price * product.quantity;
            }, 0);
            return {
                ...state,
                total: total,
            };
        default:
            return state;
    }
};

export default reducer;
