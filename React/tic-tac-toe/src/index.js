import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Provider from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AuthorizedRoute from './app/components/AuthorizedRoute';
import store from './redux/store';
import App from './app';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';
import Login from './app/screens/Login';
// El provider lo agregué yo, y los routers
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path="/auth" component={Login} />
              <AuthorizedRoute path="/app" component={App} />
              <Redirect to="/auth" />
            </Switch>
          </Fragment>
        </BrowserRouter>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render once
render(App);

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
