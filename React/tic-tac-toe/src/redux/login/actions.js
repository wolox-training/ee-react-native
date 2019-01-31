import { stringArrayToObject } from '../../utils/stringUtils';

export const actions = stringArrayToObject(
  [
    'GET_LOGGED_USER',
    'LOGIN_SUCCESS'
  ],
  '@@LOGIN'
);

const actionCreators = {
  getLoggedUser: () => ({
    type: actions.GET_LOGGED_USER
  }),
  login: status => dispatch => {
    dispatch({ type: actions.LOGIN_SUCCESS, payload: status });
  }
};

export default actionCreators;
