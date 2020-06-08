import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";

import "./header.css";
import logo from "../../assets/img/logo.png";

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="navigation__list">
      <li className="navigation__item">
        <Link to="/favourites">
          <div className="navigation__link">Favourites</div>
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/profile">
          <div className="navigation__link">User</div>
        </Link>
      </li>
      <li className="navigation__item">
        <a href="#!" onClick={logout}>
          <div className="navigation__link">Logout</div>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navigation__list">
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
    </ul>
  );

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
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
