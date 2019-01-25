import immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  pending: false,
  logged: false
};

const reducer = (state = immutable(initialState), action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return immutable(state).merge({
        logged: true,
        pending: false
      });
    default:
      return state;
  }
};

export default reducer;
