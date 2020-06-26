import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { register } from "../../actions/auth";

import Container from "../../components/UI/Container";
import Headline from "../../components/UI/Headline";
import Paragraph from "../../components/UI/Paragraph";
import RegisterForm from "./components/RegisterForm";
import RouteStyledLink from "../../components/UI/RouteStyledLink";

const RegisterPage = ({ isAuthenticated, register }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const onRegisterSubmit = (credentials) => {
    register(credentials);
  };

  return (
    <main>
      <h1 className="visually-hidden">Registration Page</h1>
      <Container>
        <Headline as="h2">Sign Up</Headline>
        <Paragraph>Create Your Account</Paragraph>
        <RegisterForm onSubmit={onRegisterSubmit} />
        <p>
          Already have an account?{" "}
          <RouteStyledLink to={"/login"} value={"Sign In"} />
        </p>
      </Container>
    </main>
  );
};

RegisterPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(RegisterPage);
