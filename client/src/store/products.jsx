import Axios from "axios";

const SET_PRODUCTS = 'SET_PRODUCTS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const MODULE_NAME = 'products';
export const selectProducts = state => state[MODULE_NAME].products;
export const selectFilteredProducts = state => state[MODULE_NAME].filteredProducts;

const initialState = {
    products: [],
    filteredProducts: []
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case FILTER_PRODUCTS:
            return {
                ...state,
                filteredProducts: payload
            }
        default:
            return state
    }
}

export const setProductsSuccess = payload => ({
    type: SET_PRODUCTS,
    payload
});

export const setFilterSuccess = payload => ({
    type: FILTER_PRODUCTS,
    payload
});

export const setProducts = () => async dispatch => {
    try {
        const reqUrl = `/api/products`;

        const { status, data } = await Axios.get(reqUrl);
        const prod = data;

        if (status === 200) {
            dispatch(setProductsSuccess(prod));
        }

    } catch (error) {
        console.log(error);
    }
}

export const filterProducts = (category1, category2) => async dispatch => {
    try {
        const category = category2 ? category2 : category1;
        const reqUrl = `/api/products/filter?categories=${category}&perPage=15&startPage=1`;
        console.log(reqUrl);

        const { status, data } = await Axios.get(reqUrl);
        const prod = data.products;
        console.log(prod);
        if (status === 200) {
            dispatch(setFilterSuccess(prod));
        }

    } catch (error) {
        console.log(error);
    }
}