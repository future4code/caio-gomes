import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../../Page/Login";
import Home from "../../Page/Home";

export const routes = {
  login: '/',
  home: '/home'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
      <Route path={routes.home} component={Home} />
      <Route path={routes.login} component={Login} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
