import React from "react";
import { Switch, Route } from "react-router-dom";

/* Constants */
import Routes from "@constants/routes";

/* Routes */
import Favorites from "@containers/Favorites/Favorites";
import Home from "@containers/Home/Home";
import Countries from "@containers/Countries/Countries";
import Country from "@containers/Country/Country";

export default (
  <Switch>
    <Route exact path={Routes.HOME} component={Home} />
    <Route path={Routes.FAVORITES} component={Favorites} />
    <Route path={Routes.COUNTRIES} component={Countries} />
    <Route path={`${Routes.COUNTRY}/:country`} component={Country} />
  </Switch>
);
