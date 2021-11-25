import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ROUTING_MAP } from "../../constants";
import { Report } from "../../pages/Report";
import { Reviews } from "../../pages/Reviews";
const Router = () => {
  return (
    <Switch>
      <Route exact path={ROUTING_MAP.REVIEWS} children={<Reviews />} />
      <Route exact path={ROUTING_MAP.REPORT} children={<Report />} />
      <Redirect to={ROUTING_MAP.REVIEWS} />
    </Switch>
  );
};
export default Router;
