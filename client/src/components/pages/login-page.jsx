import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

import "./auth-page.css";

const LoginPage = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect if log in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className="login container">
      <h1 className="login__header">Sign In</h1>
      <p className="login__title">Sign into Your Account</p>
      <form className="login__form" onSubmit={(e) => onSubmit(e)}>
        <input
          className="login__login"
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
          autoFocus
        />
        <input
          className="login__password"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          minLength="6"
        />
        <button type="submit" className="btn" value="Login">
          <span>Login</span>
        </button>
      </form>
      <p className="login__signup">
        Don't have an account?{" "}
        <Link to="/register" className="link">
          Sign Up
        </Link>
      </p>
    </section>
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
