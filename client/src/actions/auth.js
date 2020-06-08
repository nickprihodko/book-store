import axios from "axios";
import { setAlert } from "./alert";
import { ACTION_TYPES } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: ACTION_TYPES.userLoaded,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ACTION_TYPES.authError,
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);

    dispatch({
      type: ACTION_TYPES.registerSuccess,
      payload: res.data,
    });

    dispatch(loadUser()); // load User after registration
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: ACTION_TYPES.registerFail,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: ACTION_TYPES.loginSuccess,
      payload: res.data,
    });

    dispatch(loadUser()); // load User after login
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: ACTION_TYPES.loginFail,
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.logOut });
};
