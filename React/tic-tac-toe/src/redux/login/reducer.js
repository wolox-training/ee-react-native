import immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  pending: true,
  logged: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LOGGED_USER:
      return immutable(state).merge(
        {
          pending: false
        }
      );
    case actions.SET_LOGGED_USER:
      return immutable(state).merge(
        {
          pending: false,
          logged: action.logged
        }
      );
    default:
      return state;
  }
};

export default reducer;
