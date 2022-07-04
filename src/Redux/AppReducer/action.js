import { GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS, GET_SHOES_DATA_FAILURE } from './actionTypes';

export const getShoes = () => dispatch => {
    dispatch({ type: GET_SHOES_DATA_REQUEST });

    const { shoes } = require('../../db.json')

    console.log(shoes);
    dispatch({
        type: GET_SHOES_DATA_SUCCESS,
        payload: shoes
    });
};

