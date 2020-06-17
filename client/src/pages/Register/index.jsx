import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { register } from "../../actions/auth";

import RouteStyledLink from "../../components/UI/RouteStyledLink";
import Container from "../../components/UI/Container";
import Headline from "../../components/UI/Headline";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = ({ register, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const onRegisterSubmit = (credentials) => {
    register(credentials);
  };

  return (
    <Container>
      <Headline title="Sign Up" as="h2" />
      <p>Create Your Account</p>
      <RegisterForm onSubmit={onRegisterSubmit} />
      <p>
        Already have an account?{" "}
        <RouteStyledLink to={"/login"} value={"Sign In"} />
      </p>
    </Container>
  );
};

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(RegisterPage);
