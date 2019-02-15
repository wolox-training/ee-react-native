import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AppContainer from './AppContainer';

function App () {
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
};

export default App;
