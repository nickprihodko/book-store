import { setAlert } from "./alert";
import { ACTION_TYPES } from "./types";

import { getUser, registerUser, loginUser } from "../api/auth";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  setAuthToken(localStorage.token); // add token to headers

  getUser()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.userLoaded,
        payload: res.data,
      });
    })
    .catch((err) => {
      localStorage.removeItem("token");

      dispatch({
        type: ACTION_TYPES.authError,
      });
    });
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const body = JSON.stringify({ name, email, password });

  registerUser(body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);

      dispatch({
        type: ACTION_TYPES.registerSuccess,
        payload: res.data,
      });

      dispatch(loadUser()); // load User after registration
    })
    .catch((err) => {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      localStorage.removeItem("token");

      dispatch({
        type: ACTION_TYPES.registerFail,
      });
    });
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });

  loginUser(body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);

      dispatch({
        type: ACTION_TYPES.loginSuccess,
        payload: res.data,
      });

      dispatch(loadUser()); // load User after login
    })
    .catch((err) => {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      localStorage.removeItem("token");

      dispatch({
        type: ACTION_TYPES.loginFail,
      });
    });
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");

  dispatch({ type: ACTION_TYPES.clearProfile });
  dispatch({ type: ACTION_TYPES.logOut });
};
