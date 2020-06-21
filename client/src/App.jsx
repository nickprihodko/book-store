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
  BookAdd,
  FavouritesPage,
  UserPage,
} from "./pages";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <Fragment>
      <Alert />
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/book/:id" component={BookPage}></Route>
        <Route path="/addbook" component={BookAdd}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <PrivateRoute path="/user" component={UserPage}></PrivateRoute>
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
