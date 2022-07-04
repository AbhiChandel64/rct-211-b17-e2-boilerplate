import { GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS, GET_SHOES_DATA_FAILURE } from './actionTypes';

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOES_DATA_REQUEST:
      return {
        ...state,
        shoes: [],
        isLoading: true,
        isError: false,
      };
    case GET_SHOES_DATA_FAILURE:
      return {
        ...state,
        shoes: [],
        isLoading: false,
        isError: true,
      };
    case GET_SHOES_DATA_SUCCESS:
      return {
        ...state,
        shoes: action.payload,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default reducer;