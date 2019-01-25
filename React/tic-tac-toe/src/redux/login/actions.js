import { stringArrayToObject } from '../../utils/stringUtils';
import { login as loginService } from '../../services/LoginService';

export const actions = stringArrayToObject(
  [
    'GET_LOGGED_USER',
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE'
  ],
  '@@LOGIN'
);

const actionCreators = {
  getLoggedUser: () => ({
    type: actions.GET_LOGGED_USER
  }),
  login: (user) => async dispatch => {
    dispatch({ type: actions.LOGIN_REQUEST });
    const response = await loginService(user);
    if (response.ok && response.data.length > 0) {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
