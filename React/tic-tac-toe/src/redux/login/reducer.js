import immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  user: ''
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.LOGOUT]: state => immutable(state).merge({ user: '', userLoading: false })
  }
};

export default createReducer(immutable(initialState), completeReducer(reducerDescription));
