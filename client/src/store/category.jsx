import { storeServer } from "../services/storeAPI";


const SET_CATEGORIES = 'SET_CATEGORIES';

export const MODULE_NAME = 'categories';
export const selectCategories = state => state[MODULE_NAME].categories;

const initialState = {
    categories: []
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }    
        default:
            return state
    }
}

export const setCategoriesSuccess = payload => ({
    type: SET_CATEGORIES,
    payload
});

export const setCategories = () => async dispatch => {
    try {
        const reqUrl = `/catalog`;
      
        const { status, data } = await storeServer.get(reqUrl);
        const cat = data;

        if (status === 200) {
            dispatch(setCategoriesSuccess(cat));
        }

    } catch (error) {
        console.log(error);
    }
}