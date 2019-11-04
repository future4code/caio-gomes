import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from '../HomePage';
import LoginPage from "../LoginPage";
import ApplicationForm from '../ApplicationForm';
import CreateTrip from '../CreateTrip';
import ListTripsPage from '../ListTripsPage';
import TripDetailsPage from '../TripDetailsPage';



export const routes = {
  root: "/",
  form: "/application-form",
  login: "/login",
  create: "/trips/create",
  trips: "/trips/list",
  detail: "/trips/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.form} component={ApplicationForm} />
        <Route path={routes.create} component={CreateTrip} />
        <Route path={routes.trips} component={ListTripsPage} />
        <Route path={routes.detail} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
