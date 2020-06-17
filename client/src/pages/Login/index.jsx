import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../../actions/auth";

import RouteStyledLink from "../../components/UI/RouteStyledLink";
import Container from "../../components/UI/Container";
import Headline from "../../components/UI/Headline";
import LoginForm from "./components/LoginForm";

const LoginPage = ({ login, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onLoginSubmit = (credentials) => {
    const { email, password } = credentials;
    login(email, password);
  };

  return (
    <Container>
      <Headline title="Sign In" as="h2" />
      <p>Sign into Your Account</p>
      <LoginForm onSubmit={onLoginSubmit} />
      <p>
        Don't have an account?{" "}
        <RouteStyledLink to="/register" value="Sign Up" />
      </p>
    </Container>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
