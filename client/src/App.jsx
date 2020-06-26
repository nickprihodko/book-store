import React, { useEffect } from "react";
import { connect, batch } from "react-redux";
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

const App = ({ user }) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      batch(() => {
        store.dispatch(loadUser());
        store.dispatch(loadFavorites());
      });
    }
  }, []);

  return (
    <>
      <Alert />
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/book/:id" component={BookPage} />
        <PrivateRoute path="/addbook" component={BookAdd} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/user" component={UserPage} />
        {user && <PrivateRoute path="/favorites" component={FavoritesPage} />}
      </Switch>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(App);
