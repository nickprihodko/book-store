import axios from "axios";
import { setAlert } from "./alert";

import { ACTION_TYPES } from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile"); // me ???

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
