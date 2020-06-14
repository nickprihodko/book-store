import React, { useEffect, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import store from "./store";

import { loadUser } from "./actions/auth";

import Alert from "./components/Alert";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/routing/PrivateRoute";

import {
  HomePage,
  LoginPage,
  RegisterPage,
  BookPage,
  FavouritesPage,
  ProfilePage,
} from "./pages";

const App = () => {
  // learn more
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  }, []); // run once

  return (
    <Fragment>
      <Alert />
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/book" component={BookPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <PrivateRoute path="/profile" component={ProfilePage}></PrivateRoute>
        <PrivateRoute
          path="/favourites"
          component={FavouritesPage}
        ></PrivateRoute>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
