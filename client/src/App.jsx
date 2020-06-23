import React, { useEffect, Fragment } from "react";
import { batch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import store from "./store";
import { loadUser } from "./actions/auth";
import { loadFavorites } from "./actions/books";

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
  FavoritesPage,
  UserPage,
} from "./pages";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      batch(() => {
        store.dispatch(loadUser());
        store.dispatch(loadFavorites());
      });
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
          path="/favorites"
          component={FavoritesPage}
        ></PrivateRoute>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
