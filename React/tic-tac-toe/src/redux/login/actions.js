import { stringArrayToObject } from '../../utils/stringUtils';
import { login as loginService } from '../../services/LoginService';
import { history } from '../../history';
import routes from '../../constants/routes';
import ScreenActions from '../screen/actions';

export const actions = stringArrayToObject(
  [
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE',
    'LOGOUT'
  ],
  '@@LOGIN'
);

const actionCreators = {
  login: (user) => async dispatch => {
    dispatch({ type: actions.LOGIN_REQUEST });
    const response = await loginService({ email: user.email });
    if (response.ok) {
      if (response.data.length > 0) {
        if (response.data[0].password === user.password) {
          dispatch({
            type: actions.LOGIN_SUCCESS
          });
          dispatch(ScreenActions.setDefaultScreen());
          history.push(routes.APP);
        } else {
          dispatch({
            type: actions.LOGIN_FAILURE,
            payload: 'Password is incorrect'
          });
        }
      } else {
        dispatch({
          type: actions.LOGIN_FAILURE,
          payload: 'Email not registered yet'
        });
      }
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
