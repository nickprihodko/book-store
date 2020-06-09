import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../actions/auth";
import { setAlert } from "../actions/alert";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import RouteStyledLink from "../components/UI/RouteStyledLink";
import Container from "../components/UI/Container";
import Form from "../components/UI/Form";
import Headline from "../components/UI/Headline";

const LoginPage = ({ login, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const checkFields = () => {
    let isValid = true;

    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!emailValid) {
      setAlert("Please include a valid email", "danger");
      isValid = false;
    }

    if (password.length < 6) {
      setAlert("Please enter a password with 6 or more characters", "danger");
      isValid = false;
    }

    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const isAllValid = checkFields();
    if (isAllValid) {
      login(email, password);
    }
  };

  // Redirect if log in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Headline title={"Sign In"} />
      <p className="login__title">Sign into Your Account</p>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Input
          placeholder={"Email Address"}
          name={"email"}
          value={email}
          onChange={(e) => onChange(e)}
          autoFocus
        />
        <Input
          placeholder={"Password"}
          name={"password"}
          value={password}
          onChange={(e) => onChange(e)}
        />
        <Button type={"submit"} value={"Login"} />
      </Form>
      <p className="login__signup">
        Don't have an account?{" "}
        <RouteStyledLink to={"/register"} value={"Sign Up"} />
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

// learn more {login, setAlert}
export default connect(mapStateToProps, { login, setAlert })(LoginPage);
