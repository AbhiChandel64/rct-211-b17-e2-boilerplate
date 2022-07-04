import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes';

const LOGIN_URL = 'https://reqres.in/api/login';

export const login = (email, password) => dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    axios.post(LOGIN_URL, {
        "email": email,
        "password": password
    }, { headers: { 'Content-Type': 'application/json' } })
        .then(({ data }) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.token
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({ type: LOGIN_FAILURE });
        });
};

