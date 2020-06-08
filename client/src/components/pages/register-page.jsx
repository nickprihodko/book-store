import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

import "./auth-page.css";

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

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if log in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className="container">
      <h1 className="register__header">Sign Up</h1>
      <p className="register__title">Create Your Account</p>
      <form className="register__form" onSubmit={(e) => onSubmit(e)}>
        <input
          className="register__name"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          required
          autoFocus
        />
        <input
          className="register__login"
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          className="register_password"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          required
          minLength="6"
        />
        <input
          className="register__repeat-password"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={(e) => onChange(e)}
          required
          minLength="6"
        />
        <button type="submit" className="btn" value="Register">
          <span>Register</span>
        </button>
      </form>
      <p className="register__signin">
        Already have an account?{" "}
        <Link to="/login" className="link">
          Sign In
        </Link>
      </p>
    </section>
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

export default connect(mapStateToProps, { setAlert, register })(RegisterPage);
