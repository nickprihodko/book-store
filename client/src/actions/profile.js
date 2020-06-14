import { setAlert } from "./alert";
import { ACTION_TYPES } from "./types";

import { getProfile, createUpdateProfile } from "../api/profile";
import setAuthToken from "../utils/setAuthToken";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  setAuthToken(localStorage.token); // add token to headers

  getProfile()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.getProfile,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.profileError,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    });
};

// create or update profile
export const createProfile = (formData, edit = false) => async (dispatch) => {
  const body = JSON.stringify({ formData, edit });

  createUpdateProfile(body)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.getProfile,
        payload: res.data,
      });

      dispatch(setAlert(edit ? "Profile Updated" : "Profile Created"));
    })
    .catch((err) => {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: ACTION_TYPES.profileError,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    });
};
