import immutable from 'seamless-immutable';

import routes from '../../constants/routes';

import { actions } from './actions';

const initialState = {
  screen: ''
};

const reducer = (state = immutable(initialState), action) => {
  switch (action.type) {
    case actions.SET_DEFAULT_SCREEN:
      return immutable(state).merge({
        screen: routes.APP
      });
    case actions.SET_SCREEN:
      return immutable(state).merge({
        screen: action.payload
      });
    default:
      return state;
  }
};

export default reducer;
