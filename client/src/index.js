import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
	    applyMiddleware(thunk)
  ));

// const store = createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);