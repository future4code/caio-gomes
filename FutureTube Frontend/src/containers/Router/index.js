import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../../Page/Login";
import Home from "../../Page/Home";
import VideoDetail from "../../Page/VideoDetail";

export const routes = {
  login: "/",
  home: "/home",
  video: "/video"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.home} component={Home} />
        <Route path={routes.video} component={VideoDetail}/>
        <Route path={routes.login} component={Login} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
