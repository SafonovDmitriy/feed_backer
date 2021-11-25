import React from "react";
import { render } from "react-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import store from "./redux/store";
import "./styles.scss";

render(
  <Provider store={store}>
    <BrowserRouter>
      <ReactNotification />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
