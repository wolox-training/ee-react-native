import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AppContainer from './AppContainer';

// import '../config';

export default class App extends Component {
  render () {
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
};
