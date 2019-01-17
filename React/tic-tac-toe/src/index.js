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
import { saveState } from './utils/localStorage';

// Para persistir el estado en el storage del browser
store.subscribe(() => {
  saveState(store.getState());
});
// El provider lo agregué yo, y los routes
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/auth" component={Login} />
            <AuthorizedRoute path="/app" component={App} />
            <Redirect to="/auth" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render once. Le saqué el parametro App
render();

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
