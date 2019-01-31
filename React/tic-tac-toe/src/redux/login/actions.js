import { stringArrayToObject } from '../../utils/stringUtils';
import { login as loginService } from '../../services/LoginService';
import { history } from '../../history';
import routes from '../../constants/routes';

export const actions = stringArrayToObject(
  [
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE',
    'LOGOUT'
  ],
  '@@LOGIN'
);

const privateActionCreators = {
  checkResponseValidity: (user, data) => dispatch => {
    if (data !== undefined && data.password === user.password && data.email === user.email) {
      dispatch({
        type: actions.LOGIN_SUCCESS
      });
      history.push(routes.APP);
    } else {
      dispatch(privateActionCreators.getLoginFailure(data));
    }
  },
  getLoginFailure: data => dispatch => {
    dispatch({
      type: actions.LOGIN_FAILURE,
      payload: data === undefined ? 'Email not registered yet' : 'Password is incorrect'
    });
  }
};

const actionCreators = {
  login: user => async dispatch => {
    dispatch({ type: actions.LOGIN_REQUEST });
    const response = await loginService({ email: user.email });
    if (response.ok) {
      dispatch(privateActionCreators.checkResponseValidity(user, response.data[0]));
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: 'Connection error'
      });
    }
  },
  logout: () => dispatch => {
    dispatch({ type: actions.LOGOUT });
    history.push(routes.LOGIN);
  }
};

export default actionCreators;
