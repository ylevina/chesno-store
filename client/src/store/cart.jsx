import { storeServer } from "../services/storeAPI";
import { selectUserToken } from "./auth";

const CREATE_CART = 'CREATE_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const GET_CART = 'GET_CART';

export const MODULE_NAME = 'cart';
export const selectCart = state => state[MODULE_NAME].cart;

const initialState = {
    cart: []
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_CART:
            return {
                ...state,
                cart: payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        case GET_CART:
            return {
                ...state,
                cart: payload
            }
        default:
            return state
    }
}

export const createCartSuccess = payload => ({
    type: CREATE_CART,
    payload
});

export const addToCartSuccess = payload => ({
    type: ADD_TO_CART,
    payload
});

export const getCartSuccess = payload => ({
    type: GET_CART,
    payload
});

export const createCart = (cart) => async (dispatch, getState) => {
    try {
        const state = getState();
        const token = selectUserToken(state);

        const reqUrl = `/cart`;

        const { status, data } = await storeServer.post(reqUrl, cart);
        const cartResponse = data;

        if (status === 200) {
            console.log("cart success: ", cartResponse)
            dispatch(createCartSuccess(cartResponse));
        }

    } catch (error) {
        console.log(error);
    }
}

export const addToCart = (product) => async dispatch => {
    try {
        const reqUrl = `/cart`;

        const { status, data } = await storeServer.put(reqUrl);
        const fav = data;

        if (status === 200) {
            dispatch(addToCartSuccess(fav));
        }

    } catch (error) {
        console.log(error);
    }
}

export const getCart = () => async (_, getState, dispatch) => {
    try {
        const state = getState();
        const token = selectUserToken(state);

        const reqUrl = `/cart`;
        const { status, data } = await storeServer.get(reqUrl);
        const cart = data;
        console.log("get wishlist", cart);
        if (status === 200) {
            dispatch(getCartSuccess(cart));
        }

    } catch (error) {
        console.log(error);
    }
}