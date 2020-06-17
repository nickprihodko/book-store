export const ACTION_TYPES = {
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
  clearProfile: "PROFILE_CLEAR/Profile",
  createProfile: "CREATE_PROFILE/Profile",
  updateProfile: "UPDATE_PROFILE/Profile",

  booksLoaded: "FETCH_BOOKS_SUCCESS/Books",
  booksRequested: "FETCH_BOOKS_REQUEST/Books",
  booksError: "FETCH_BOOKS_FAILURE/Books",

  bookRequest: "FETCH_BOOK_REQUEST/Books",
  bookLoaded: "FETCH_BOOK_LOADED/Books",
  bookError: "FETCH_BOOK_ERROR/Books",

  setSort: "SET_SORT/Books",
  setCategory: "SET_CATEGORY/Books",
  loadCategories: "FETCH_CATEGORIES/Books",

  postsRequest: "FETCH_POST_REQUEST/Posts",
  postsLoaded: "FETCH_POSTS/Posts",
  postError: "POST_ERROR/Posts",
  addPost: "ADD_POST/ Posts",
  deletePost: "DELETE_POST/Posts",
};
