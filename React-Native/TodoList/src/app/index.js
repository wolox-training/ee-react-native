import React, { Component } from 'react';
import Main from './screens/Main';
import { Provider } from 'react-redux';
import store from '../redux/store';

// import '../config';

export default class App extends Component {
  render () {
    return(
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
};
