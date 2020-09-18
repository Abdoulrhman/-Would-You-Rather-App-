import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/mocks/App';
import App from './containers/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/index';
import middleware from './store/middleware';

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
