import React from "react";
import BookList from "../Book-list";

import Header from "../Header";

const HomePage = () => {
  return (
    <div className="wrapper">
      <h1 className="visually-hidden">Book store</h1>
      <Header />
      <BookList />
      <footer />
    </div>
  );
};

export default HomePage;
