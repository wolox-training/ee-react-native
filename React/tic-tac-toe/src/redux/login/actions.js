import { stringArrayToObject } from '../../utils/stringUtils';
import { login as loginService } from '../../services/LoginService';

export const actions = stringArrayToObject(
  [
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE'
  ],
  '@@LOGIN'
);

const privateActionCreators = {
  loginSuccess: () => dispatch => {
    dispatch({
      type: actions.LOGIN_SUCCESS
    });
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
  }
};

export default actionCreators;
