import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo-link">
          <img
            className="header__logo"
            src={logo}
            alt="Logotype of book store"
            width="50"
            height="50"
          />
        </div>
      </Link>
      <span className="header__description">Book store</span>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/profile">
              <div className="navigation__link">User</div>
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/register">
              <div className="navigation__link">Register</div>
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="login">
              <div className="navigation__link">Log in</div>
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/">
              <div className="navigation__link">Log out</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
