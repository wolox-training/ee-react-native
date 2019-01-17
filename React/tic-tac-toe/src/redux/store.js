import { createStore, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loadState } from '../utils/localStorage';

import loggedUserReducer from './login/reducer';

const reducers = {
  login: loggedUserReducer,
  form: formReducer
};

const persistedState = loadState();

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(reducer, persistedState, composeEnhancers());
