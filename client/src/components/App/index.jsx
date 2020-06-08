import React, { useEffect, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import store from "../../store";

import Alert from "../Alert";
import setAuthToken from "../../utils/setAuthToken";
import { loadUser } from "../../actions/auth";
import PrivateRoute from "../routing/PrivateRoute";

import {
  HomePage,
  LoginPage,
  RegisterPage,
  BookPage,
  FavouritesPage,
} from "../pages";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = (props) => {
  // learn more
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); // run once

  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/book" component={BookPage}></Route>
        <PrivateRoute
          path="/favourites"
          component={FavouritesPage}
        ></PrivateRoute>
      </Switch>
    </Fragment>
  );
};

export default App;
