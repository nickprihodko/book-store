import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { logout } from "../../actions/auth";

import logo from "../../assets/img/logo.png";

const Header = ({ isAuthenticated, logout }) => {
  const authLinks = (
    <NavList>
      <NavItem>
        <Link to="/addbook">
          <NavLink>Add book</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/favorites">
          <NavLink>Favorites</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/user">
          <NavLink>User</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/" onClick={logout}>
          <NavLink>Logout</NavLink>
        </Link>
      </NavItem>
    </NavList>
  );

  const guestLinks = (
    <NavList>
      <NavItem>
        <Link to="/register">
          <NavLink>Register</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/login">
          <NavLink>Log in</NavLink>
        </Link>
      </NavItem>
    </NavList>
  );

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} alt="Logotype of Book Store" width="50" height="50" />
      </Link>
      <Description>Book store</Description>
      <Nav>{isAuthenticated ? authLinks : guestLinks}</Nav>
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

const Logo = styled.img`
  padding: 0 10px;

  vertical-align: middle;
`;

const Description = styled.span`
  font-family: "Oxygen Bold";
  font-size: 28px;
  color: #ffffff;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  &:first-child {
    border-right: 2px solid #ffffff;
  }
`;

const NavLink = styled.div`
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
`;

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
