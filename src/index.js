import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import listReducer from './reducers/listReducer';
import cartReducer from './reducers/cartReducer';
import sortReducer from './reducers/sortReducer';

import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';

const rootReducer = combineReducers({
  list: listReducer,
  sort: sortReducer,
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
);
