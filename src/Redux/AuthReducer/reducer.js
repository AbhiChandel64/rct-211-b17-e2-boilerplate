import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes';

const initialState = {
  data: {
    isAuth: false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        data: {
          isAuth: false,
          token: "",
        },
        isLoading: true,
        isError: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        data: {
          isAuth: false,
          token: "",
        },
        isLoading: false,
        isError: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: {
          isAuth: true,
          token: action.payload,
        },
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default reducer;
