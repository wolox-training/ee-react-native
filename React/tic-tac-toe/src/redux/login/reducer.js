import immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  pending: false,
  logged: false,
  authError: ''
};

const reducer = (state = immutable(initialState), action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return immutable(state).merge({
        pending: true,
        authError: ''
      });
    case actions.LOGIN_SUCCESS:
      return immutable(state).merge({
        logged: true,
        pending: false
      });
    case actions.LOGIN_FAILURE:
      return immutable(state).merge({
        logged: false,
        pending: false,
        authError: action.payload
      });
    case actions.LOGOUT:
      return immutable(state).merge({
        logged: false,
        pending: false
      });
    default:
      return state;
  }
};

export default reducer;
