import React from "react";
import { Router } from "../Router";
import { SideBar } from "../SideBar";
import "./App.styles.scss";
const App = () => {
  return (
    <div className="app_wrapper">
      <SideBar />
      <Router />
    </div>
  );
};
export default App;
