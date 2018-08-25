import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import IntlApp from './containers/IntlApp';
import fetchJobs from './middlewares/fetchJobs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(fetchJobs, thunk))
);

render(
  <Provider store={store}>
    <IntlApp />
  </Provider>,
  document.getElementById('root')
);
