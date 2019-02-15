import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todoReducer from './Todo/reducer';

const reducers = combineReducers({
  todo: todoReducer
});

const middlewares = [];
const enhancers = [];

middlewares.push(thunk);

enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

export default createStore(reducers, composeEnhancers(...enhancers));
