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
  loginSuccess: () => dispatch => {
    dispatch({
      type: actions.LOGIN_SUCCESS
    });
    history.push(routes.APP);
  },
  loginFailure: problem => dispatch => {
    dispatch({
      type: actions.LOGIN_FAILURE,
      payload: problem
    });
  }
};

const actionCreators = {
  login: user => async dispatch => {
    dispatch({ type: actions.LOGIN_REQUEST });
    const response = await loginService(user);
    if (response.ok) {
      dispatch(privateActionCreators.loginSuccess());
    } else {
      dispatch(privateActionCreators.loginFailure(response.problem));
    }
  },
  logout: () => dispatch => {
    dispatch({ type: actions.LOGOUT });
    history.push(routes.LOGIN);
  }
};

export default actionCreators;
