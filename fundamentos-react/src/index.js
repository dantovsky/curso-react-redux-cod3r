import "./index.css";
import ReactDom from "react-dom";
import React from "react";

import App from './App'

// Usamos o ReactDom para renderizar algo na tela
// Recede dois params: "elemento a inserir" e "elemento onde será renderizado a app React"
ReactDom.render(
  <App />,
  document.getElementById("root")
);
