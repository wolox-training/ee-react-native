import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { loadState } from '../services/StorageService';

import loggedUserReducer from './login/reducer';

const reducers = {
  login: loggedUserReducer,
  form: formReducer
};

const persistedState = loadState();

const reducer = combineReducers(reducers);

// const thunkEnhancer = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(reducer, persistedState, composeEnhancers(applyMiddleware(thunk)));