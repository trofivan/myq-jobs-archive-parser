import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import App from './containers/App';
import fetchJobs from './middlewares/fetchJobs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(fetchJobs))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
