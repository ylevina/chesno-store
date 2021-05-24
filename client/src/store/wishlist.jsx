import { storeServer } from "../services/storeAPI";

import { selectUserToken } from "./auth";

const CREATE_WISHLIST = 'CREATE_WISHLIST';
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const GET_WISHLIST = 'GET_WISHLIST';

export const MODULE_NAME = 'wishlist';
export const selectWishlist = state => state[MODULE_NAME].wishlist;

const initialState = {
    wishlist: []
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_WISHLIST:
            return {
                ...state,
                wishlist: payload
            }
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: payload
            }
        case GET_WISHLIST:
            return {
                ...state,
                wishlist: payload
            }
        default:
            return state
    }
}

export const createWishlistSuccess = payload => ({
    type: CREATE_WISHLIST,
    payload
});

export const addToWishlistSuccess = payload => ({
    type: ADD_TO_WISHLIST,
    payload
});

export const getWishlistSuccess = payload => ({
    type: GET_WISHLIST,
    payload
});

export const createWishlist = (wishlist) => async (_, getState, dispatch) => {
    try {
        const state = getState();
        const token = selectUserToken(state);

        const reqUrl = `/wishlist`;

        const { status, data } = await storeServer.post(reqUrl, wishlist);
        const wish = data;

        if (status === 200) {
            console.log("wish success: ", wish)
            dispatch(createWishlistSuccess(wish));
        }

    } catch (error) {
        console.log(error);
    }
}

export const addToWishlist = (productId) => async dispatch => {
    try {
        const reqUrl = `/wishlist/${productId}`;

        const { status, data } = await storeServer.put(reqUrl);
        const fav = data;

        if (status === 200) {
            dispatch(createWishlistSuccess(fav));
        }

    } catch (error) {
        console.log(error);
    }
}

export const getWishlist = () => async (_, getState, dispatch) => {
    try {
        const state = getState();
        const token = selectUserToken(state);

        const reqUrl = `/wishlist`;
        const { status, data } = await storeServer.get(reqUrl);
        const fav = data;
        console.log("get wishlist", fav);
        if (status === 200) {
            dispatch(getWishlistSuccess(fav));
        }

    } catch (error) {
        console.log(error);
    }
}