import { storeServer } from "../services/storeAPI";

const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCT = 'GET_PRODUCT';

export const MODULE_NAME = 'products';
export const selectProducts = state => state[MODULE_NAME].products;

const initialState = {
    products: [],
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }        
        default:
            return state
    }
}

export const getProductsSuccess = payload => ({
    type: GET_PRODUCTS,
    payload
});

export const getProducts = (category1, category2) => async dispatch => {
    try {
        const category = category2 ? category2 : category1;
        const reqUrl = (category1 || category2)? 
        `/products/filter?categories=${category1},${category2}&perPage=15&startPage=1`:
        `/products/filter?&perPage=15&startPage=1`;

        const { status, data } = await storeServer.get(reqUrl);
        const prod = data.products;
        if (status === 200) {
            dispatch(getProductsSuccess(prod));
        }

    } catch (error) {
        console.log(error);
    }
}