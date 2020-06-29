import React, { useEffect, Suspense, lazy } from "react";
import { connect, batch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { loadUser } from "./actions/auth";
import { loadFavorites } from "./actions/books";

import Alert from "./components/Alert";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/routing/PrivateRoute";

const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const BookPage = lazy(() => import("./pages/Book"));
const BookAdd = lazy(() => import("./pages/BookAdd"));
const FavoritesPage = lazy(() => import("./pages/Favorite"));
const UserPage = lazy(() => import("./pages/User"));

const App = ({ loadUser, loadFavorites }) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      batch(() => {
        loadUser();
        loadFavorites();
      });
    }
  }, [loadUser, loadFavorites]);

  return (
    <>
      <Alert />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/book/:id" component={BookPage} />
          <PrivateRoute path="/addbook" component={BookAdd} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/user" component={UserPage} />
          <PrivateRoute path="/favorites" component={FavoritesPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

App.propTypes = {
  loadUser: PropTypes.func.isRequired,
  loadFavorites: PropTypes.func.isRequired,
};

export default connect(null, { loadUser, loadFavorites })(App);
