import { setAlert } from "./alert";
import { ACTION_TYPES } from "./types";

import { registerUser, loginUser, getUser, editUser } from "../api/auth";
import { loadFavorites } from "./books";

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

      dispatch(setAlert("Registration success!", "success"));
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
export const login = ({ email, password }) => async (dispatch) => {
  const body = JSON.stringify({ email, password });

  loginUser(body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);

      dispatch({
        type: ACTION_TYPES.loginSuccess,
        payload: res.data,
      });

      dispatch(setAlert("Login success!", "success"));
      dispatch(loadUser()); // load User after login
      dispatch(loadFavorites()); // load favorites after login
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

// Load User
export const loadUser = () => async (dispatch) => {
  getUser()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.userLoaded,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      localStorage.removeItem("token");

      dispatch({
        type: ACTION_TYPES.authError,
      });
    });
};

// Logout
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: ACTION_TYPES.logOut });
};

// Update User
export const updateUser = (data) => async (dispatch) => {
  const formData = new FormData();

  formData.append("about", data.about);
  if (data.avatar) {
    formData.append("avatar", data.avatar);
  }

  editUser(formData)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.updateUser,
        payload: res.data,
      });

      dispatch(setAlert("User updated"));
    })
    .catch((err) => {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    });
};
