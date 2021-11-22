import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { App } from "./components/App";
import history from "./history";
import store from "./redux/store";
import "./styles.scss";

render(
  <Provider store={store}>
    <Router history={history}>
      <ReactNotification />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
