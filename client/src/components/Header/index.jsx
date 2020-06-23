import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { logout } from "../../actions/auth";

import logo from "../../assets/img/logo.png";

const Header = ({ isAuthenticated, logout }) => {
  const authLinks = (
    <ul className="navigation__list">
      <li>
        <Link to="/addbook">
          <div className="navigation__link">Add book</div>
        </Link>
      </li>
      <li>
        <Link to="/favorites">
          <div className="navigation__link">Favorites</div>
        </Link>
      </li>
      <li>
        <Link to="/user">
          <div className="navigation__link">User</div>
        </Link>
      </li>
      <li>
        <Link to="/" onClick={logout}>
          <div className="navigation__link">Logout</div>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navigation__list">
      <li>
        <Link to="/register">
          <div className="navigation__link">Register</div>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <div className="navigation__link">Log in</div>
        </Link>
      </li>
    </ul>
  );

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo
          src={logo}
          alt="Logotype of Book Store"
          width="50"
          height="50"
        />
      </Link>
      <HeaderDescription className="header__description">
        Book store
      </HeaderDescription>
      <Nav className="navigation">
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin: 10px;
  height: 60px;

  color: #ffffff;

  background-color: #1a237e;
  border-radius: 4px;
`;

const HeaderLogo = styled.img`
  padding: 0 10px;

  vertical-align: middle;
`;

const HeaderDescription = styled.span`
  font-family: "Oxygen Bold";
  font-size: 28px;
  color: #ffffff;
`;

const Nav = styled.nav`
  margin-left: auto;

  .navigation {
    &__list {
      display: flex;
      justify-content: space-between;

      & > li:first-child {
        border-right: 2px solid #ffffff;
      }
    }

    &__link {
      padding: 18px 10px;

      font-family: "Oxygen Bold";
      font-size: 20px;
      color: #ffffff;

      border-radius: 4px;

      &:hover,
      &:focus {
        background-color: #303f9f;
        color: rgba(0, 0, 0, 0.6);
      }

      &:active {
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
