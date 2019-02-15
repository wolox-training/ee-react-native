import { stringArrayToObject } from '../../utils/stringUtils';

export const actions = stringArrayToObject(
  [
    'SET_DEFAULT_SCREEN',
    'SET_SCREEN'
  ],
  '@@SCREEN'
);

const actionCreators = {
  setDefaultScreen: () => dispatch => {
    dispatch({ type: actions.SET_DEFAULT_SCREEN });
  },
  setScreen: screen => dispatch => {
    dispatch({
      type: actions.SET_SCREEN,
      payload: screen
    });
  }
};

export default actionCreators;
