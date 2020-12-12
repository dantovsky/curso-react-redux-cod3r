import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; // for Redux
import { Provider } from "react-redux"; // for Redux (envolve a tag App)

import App from "./main/app";
import reducers from "./main/reducers"; // for Redux

// Definicao da store, passando os reducers para o método createStore()
const store = createStore(reducers); // for Redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
