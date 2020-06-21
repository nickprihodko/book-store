export const ACTION_TYPES = {
  setAlert: "SET_ALERT/Alerts",
  removeAlert: "REMOVE_ALERT/Alerts",

  registerSuccess: "REGISTER_SUCCESS/Auth",
  registerFail: "REGISTER_FAIL/Auth",
  loginSuccess: "LOGIN_SUCCESS/Auth",
  loginFail: "LOGIN_FAIL/Auth",
  logOut: "LOGOUT/Auth",
  authError: "AUTH_ERROR/Auth",
  userLoaded: "USER_LOADED/Auth",
  updateUser: "UPDATE_USER/Auth",

  booksLoaded: "FETCH_BOOKS_SUCCESS/Books",
  booksRequested: "FETCH_BOOKS_REQUEST/Books",
  booksError: "FETCH_BOOKS_FAILURE/Books",

  bookRequest: "FETCH_BOOK_REQUEST/Books",
  bookLoaded: "FETCH_BOOK_LOADED/Books",
  bookError: "FETCH_BOOK_ERROR/Books",
  bookAdd: "ADD_BOOK/Books",

  loadCategories: "FETCH_CATEGORIES/Books",

  reviewsRequest: "FETCH_REVIEW_REQUEST/Reviews",
  reviewsLoaded: "FETCH_REVIEWS/Reviews",
  reviewError: "REVIEW_ERROR/Reviews",
  addReview: "ADD_REVIEW/Reviews",
  deleteReview: "DELETE_REVIEW/Reviews",
};
