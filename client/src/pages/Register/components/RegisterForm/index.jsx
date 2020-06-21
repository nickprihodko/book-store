import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { setAlert } from "../../../../actions/alert";

import Input from "../../../../components/UI/Input";
import Button from "../../../../components/UI/Button";

const RegisterForm = ({ onSubmit, setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) =>
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAllValid = checkFields();
    if (isAllValid) {
      const credentials = { name, email, password };
      onSubmit(credentials);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
        autoFocus
      />
      <Input
        placeholder="Email Address"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        name="password2"
        value={password2}
        onChange={handleChange}
      />

      <Button type="submit">Register</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setAlert: PropTypes.func,
};

export default connect(null, { setAlert })(RegisterForm);
