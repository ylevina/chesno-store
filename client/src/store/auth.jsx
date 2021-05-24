import { storeServer } from "../services/storeAPI";

const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS';
const SET_LOG_OUT = 'SET_LOG_OUT';

export const MODULE_NAME = 'auth';
export const selectUserToken = state => state[MODULE_NAME].token;

const initialState = {
    token: null
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_AUTH_SUCCESS:
            return {
                ...state,
                token: payload.token
            }
        case SET_LOG_OUT:
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}

export const setAuthSuccess = payload => ({
    type: SET_AUTH_SUCCESS,
    payload
});

export const setLogOut = () => ({
    type: SET_LOG_OUT,
});

export const signIn = ({ loginOrEmail, password }) => async dispatch => {
    try {
        const reqUrl = `/customers/login`;
        const reqData = {
            loginOrEmail,
            password
        };
        console.log("reqData:", reqData);
        const { status, data } = await storeServer.post(reqUrl, reqData);
        const token = data.token;
        console.log("token:", token);
        if (status === 200) {
            dispatch(setAuthSuccess({
                token
            }));

            storeServer.defaults.headers.common.Authorization = token;
        }

    } catch (error) {
        console.log(error);
    }
}

export const logOut = () => async dispatch => {
    try {
        storeServer.defaults.headers.common.Authorization = '';

    } catch (error) {
        console.log(error);
    }
}

export const signUp = ({ firstName, lastName, login, email, password }) => async dispatch => {
    try {
        const reqUrl = `/api/customers`;
        const reqData = {
            firstName,
            lastName,
            login,
            email,
            password
        };

        const { status, data } = await storeServer.post(reqUrl, reqData);

        if (status === 200) {

        }

    } catch (error) {
        console.log(error);
    }
}