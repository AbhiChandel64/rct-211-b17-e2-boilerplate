import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './AuthReducer/reducer'

const rootReducer = combineReducers({ authReducer })
const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
