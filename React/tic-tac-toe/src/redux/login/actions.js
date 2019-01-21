export const actions = {
  GET_LOGGED_USER: 'GET_LOGGED_USER',
  SET_LOGGED_USER: 'SET_LOGGED_USER'
};

const actionCreators = {
  getLoggedUser: () => ({
    type: actions.GET_LOGGED_USER
  }),
  setLoggedUser: status => ({
    type: actions.SET_LOGGED_USER,
    logged: status
  })
};

export default actionCreators;
