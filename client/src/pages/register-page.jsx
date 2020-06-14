import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import RouteStyledLink from "../components/UI/RouteStyledLink";
import Container from "../components/UI/Container";
import Form from "../components/UI/Form";
import Headline from "../components/UI/Headline";

const RegisterPage = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const checkFields = () => {
    let isValid = true;

    if (name.trim().length === 0) {
      setAlert("Please enter a valid name", "danger");
      isValid = false;
    }

    // learn more RegExp
    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!emailValid) {
      setAlert("Please include a valid email", "danger");
      isValid = false;
    }

    if (password.length < 6) {
      setAlert("Please enter a password with 6 or more characters", "danger");
      isValid = false;
    }

    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
      isValid = false;
    }

    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const isAllValid = checkFields();
    if (isAllValid) {
      register({ name, email, password });
    }
  };

  // Redirect if log in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Headline title="Sign Up" />
      <p>Create Your Account</p>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          autoFocus
        />
        <Input
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={onChange}
        />

        <Button type="submit">Register</Button>
      </Form>
      <p>
        Already have an account?{" "}
        <RouteStyledLink to={"/login"} value={"Sign In"} />
      </p>
    </Container>
  );
};

RegisterPage.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// learn more { setAlert, register }
export default connect(mapStateToProps, { setAlert, register })(RegisterPage);
