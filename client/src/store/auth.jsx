import Axios from "axios";

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
        const reqUrl = `/api/customers/login`;
        const reqData = {
            loginOrEmail,
            password
        };

        const { status, data } = await Axios.post(reqUrl, reqData);
        const token = data.token;

        if (status === 200) {
            dispatch(setAuthSuccess({
                token
            }));
        }

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

        const { status, data } = await Axios.post(reqUrl, reqData);

        if (status === 200) {
           
        }

    } catch (error) {
        console.log(error);
    }
}