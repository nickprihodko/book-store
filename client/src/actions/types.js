export const ACTION_TYPES = {
  booksLoaded: "FETCH_BOOKS_SUCCESS/Books",
  booksRequested: "FETCH_BOOKS_REQUEST/Books",
  booksError: "FETCH_BOOKS_FAILURE/Books",

  setAlert: "SET_ALERT/Alerts",
  removeAlert: "REMOVE_ALERT/Alerts",

  registerSuccess: "REGISTER_SUCCESS/Auth",
  registerFail: "REGISTER_FAIL/Auth",
  loginSuccess: "LOGIN_SUCCESS/Auth",
  loginFail: "LOGIN_FAIL/Auth",
  logOut: "LOGOUT/Auth",
  userLoaded: "USER_LOADED/Auth",
  authError: "AUTH_ERROR/Auth",

  getProfile: "GET_PROFILE/Profile",
  profileError: "PROFILE_ERROR/Profile",
};
