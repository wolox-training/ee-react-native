import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { fetchMiddleware /* , configureMergeState */ } from 'redux-recompose';


import { loadState } from '../services/StorageService';

import loggedUserReducer from './login/reducer';
import screenReducer from './screen/reducer';


const reducers = combineReducers({
  login: loggedUserReducer,
  form: formReducer,
  screen: screenReducer
});

const persistedState = loadState();

const middlewares = [];
const enhancers = [];

middlewares.push(thunk);
middlewares.push(fetchMiddleware);

enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

// configureMergeState((state, newContent) => state.merge(newContent));

export default createStore(reducers, persistedState, composeEnhancers(...enhancers));
