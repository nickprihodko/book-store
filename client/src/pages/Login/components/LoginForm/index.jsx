import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { setAlert } from "../../../../actions/alert";

import Input from "../../../../components/UI/Input";
import Button from "../../../../components/UI/Button";

const LoginForm = ({ setAlert, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAllValid = checkFields();
    if (isAllValid) {
      const credentials = { email, password };
      onSubmit(credentials);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Email Address"
        name="email"
        value={email}
        onChange={handleChange}
        autoFocus
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <Button type="submit" name="login">
        Login
      </Button>
    </Form>
  );
};

const Form = styled.form`
  text-align: center;
`;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(LoginForm);
