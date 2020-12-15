import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux"; // for Redux
import { Provider } from "react-redux"; // for Redux (envolve a tag App)

import promise from 'redux-promise' // for Redux
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from "./main/app";
import reducers from "./main/reducers"; // for Redux

// Config para funcionar o DevTools do Redux no Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
&& window.__REDUX_DEVTOOLS_EXTENSION__()

// Definicao da store, passando os reducers para o método createStore()
// const store = createStore(reducers); // for Redux
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools); // for Redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
