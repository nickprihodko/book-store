import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { login } from "../../actions/auth";

import Container from "../../components/UI/Container";
import Headline from "../../components/UI/Headline";
import Paragraph from "../../components/UI/Paragraph";
import LoginForm from "./components/LoginForm";
import RouteStyledLink from "../../components/UI/RouteStyledLink";

const LoginPage = ({ isAuthenticated, login }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onLoginSubmit = (credentials) => {
    login(credentials);
  };

  return (
    <main>
      <h1 className="visually-hidden">Login Page</h1>
      <Container>
        <Headline title="Sign In" as="h2" />
        <Paragraph>Sign into Your Account</Paragraph>
        <LoginForm onSubmit={onLoginSubmit} />
        <p>
          Don't have an account?{" "}
          <RouteStyledLink to="/register" value="Sign Up" />
        </p>
      </Container>
    </main>
  );
};

LoginPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
