import axios from "axios";

import { ACTION_TYPES } from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile");

    dispatch({
      type: ACTION_TYPES.getProfile,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ACTION_TYPES.profileError,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
