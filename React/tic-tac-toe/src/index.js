import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import AuthorizedRoute from './app/components/AuthorizedRoute';
import store from './redux/store';
import App from './app';
import Login from './app/screens/Login';
import Profile from './app/screens/Profile';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';
import { saveState } from './services/StorageService';
import routes from './constants/routes';
import { history } from './history';

store.subscribe(() => {
  saveState(store.getState());
});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={routes.AUTH} component={Login} />
            <Redirect from={routes.LOGIN_SHORT} to={routes.LOGIN} />
            <AuthorizedRoute path={routes.PROFILE} component={Profile} />
            <AuthorizedRoute path={routes.APP} component={App} />
            <Redirect to={routes.AUTH} />
          </Switch>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render();
  });
}
