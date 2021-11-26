import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ROUTING_MAP } from "../../constants";
import { Report } from "../../pages/Report";
import { Reviews } from "../../pages/Reviews";
import { Footer } from "../Footer";
import "./Router.styles.scss";
const Router = () => {
  return (
    <div className="router">
      <div className="router_content">
        <Switch>
          <Route exact path={ROUTING_MAP.REVIEWS} children={<Reviews />} />
          <Route exact path={ROUTING_MAP.REPORT} children={<Report />} />
          <Redirect to={ROUTING_MAP.REVIEWS} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};
export default Router;
