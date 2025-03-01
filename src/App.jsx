import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import HomePage from '../pages/HomePage';

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;