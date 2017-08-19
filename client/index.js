import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/routes.js'
import configureStore from './store/configureStore.js';

const store = configureStore();

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);