// import api from '../config/api';
import store from '../redux/store';
import actions from '../redux/login/actions';

export const getLoggedUser = () => {
  setTimeout(() => {
    store.dispatch(actions.getLoggedUser());
  }, 500);
};

export const login = () => new Promise((resolve) => {
  setTimeout(() => {
    store.dispatch(actions.setLoggedUser(true));
    resolve();
  }, 500);
});

export const logout = () => new Promise((resolve) => {
  setTimeout(() => {
    store.dispatch(actions.setLoggedUser(false));
    resolve();
  }, 500);
});
