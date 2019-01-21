import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AuthorizedRoute from './app/components/AuthorizedRoute';
import store from './redux/store';
import App from './app';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';
import Login from './app/screens/Login';
import { saveState } from './services/StorageService';
import routes from './constants/routes';

store.subscribe(() => {
  saveState(store.getState());
});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path={routes.AUTH} component={Login} />
            <Redirect from={routes.LOGIN_SHORT} to={routes.LOGIN} />
            <AuthorizedRoute path={routes.APP} component={App} />
            <Redirect to={routes.AUTH} />
          </Switch>
        </BrowserRouter>
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
