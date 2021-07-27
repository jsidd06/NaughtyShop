import React from "react";
import {Provider} from 'react-redux'
import ReactDom from "react-dom";
import App from "./App";
import Store from "./views/Store/Store";

ReactDom.render(
  <Provider store={Store}>
      <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
