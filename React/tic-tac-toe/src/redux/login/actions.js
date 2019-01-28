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
    const response = await loginService({ email: user.email });
    console.warn(response.data);
    console.warn(response.data[0]);
    if (response.ok) {
      if (response.data.length > 0) {
        if (response.data[0].password === user.password) {
          console.warn('EXITOO');
          dispatch({
            type: actions.LOGIN_SUCCESS,
            payload: response.data
          });
        } else {
          console.warn('MALA CONTRASENIA');
          dispatch({
            type: actions.LOGIN_FAILURE,
            payload: 'Password is incorrect'
          });
        }
      } else {
        console.warn('EMAIL NO ESSSSISSSTE');
        dispatch({
          type: actions.LOGIN_FAILURE,
          payload: 'Email not registered yet'
        });
      }
    } else {
      console.warn('NO SE PUDO CONECTAR');
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: 'Connection error'
      });
    }
  }
};

export default actionCreators;
