import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage';



const routes = {
  root: "/",
  login: "/login"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.root} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
