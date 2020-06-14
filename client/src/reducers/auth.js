import { ACTION_TYPES } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.userLoaded:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case ACTION_TYPES.registerSuccess:
    case ACTION_TYPES.loginSuccess:
      // learn more
      return { ...state, ...payload, isAuthenticated: true, loading: false };

    case ACTION_TYPES.authError:
    case ACTION_TYPES.registerFail:
    case ACTION_TYPES.loginFail:
    case ACTION_TYPES.logOut:
      return { ...state, token: null, isAuthenticated: false, loading: false };

    default:
      return state;
  }
}
