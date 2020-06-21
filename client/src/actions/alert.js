import { v4 as uuid } from "uuid";
import { ACTION_TYPES } from "./types";

export const setAlert = (msg, alertType, timeout = 1000) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: ACTION_TYPES.setAlert,
    payload: { msg, alertType, id },
  });

  setTimeout(() => {
    dispatch({ type: ACTION_TYPES.removeAlert, payload: id });
  }, timeout);
};
