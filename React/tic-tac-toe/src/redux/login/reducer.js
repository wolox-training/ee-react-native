import immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

/*
const initialState = {
  pending: false,
  logged: false,
  authError: '',
  user: {}
};
*/

const stateDescription = {
  user: ''
};

const initialState = completeState(stateDescription);
/*
const reducer = (state = immutable(initialState), action) => {
  switch (action.type) {
    case actions.LOGIN:
      return state.merge({
        pending: true,
        authError: ''
      });
    case actions.LOGIN_SUCCESS:
      return state.merge({
        logged: true,
        pending: false
      });
    case actions.LOGIN_FAILURE:
      return state.merge({
        logged: false,
        pending: false,
        authError: action.payload
      });
    case actions.LOGOUT:
      return state.merge({
        logged: false,
        pending: false
      });
    default:
      return state;
  }
};
*/

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.LOGOUT]: state => immutable(state).merge({ user: '', userLoading: false })
    // [actions.LOGIN_SUCCESS]: (state, action) => immutable({ ...state, logged: true, userError: '', userLoading: false, user: action.payload })
  }
};

export default createReducer(immutable(initialState), completeReducer(reducerDescription));

// export default reducer;
