import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  HomePage,
  LoginPage,
  RegisterPage,
  BookPage,
  FavouritesPage,
} from "../pages";

const App = ({ bookstoreService }) => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/book" component={BookPage}></Route>
      <Route path="/favourites" component={FavouritesPage}></Route>
    </Switch>
  );
};

export default App;
