import { setAlert } from "./alert";
import { ACTION_TYPES } from "./types";

import {
  getBooks,
  getBook,
  getCategories,
  getAuthors,
  createBook,
  createUpdateRating,
  getUserFavoritesBooks,
  getFavorites,
  addFavorite,
  setBookCover,
} from "../api/books";

// load books
export const loadBooks = (queryParams) => async (dispatch) => {
  return getBooks(queryParams)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.loadBooks,
        payload: res.data.pageOfItems,
      });
      dispatch({
        type: ACTION_TYPES.loadPages,
        payload: res.data,
      });
    })
    .catch((err) => {});
};

// load book
export const loadBook = (id) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.bookRequest,
  });

  return getBook(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.bookLoaded,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.bookError,
      });
    });
};

// add book
export const addBook = (data) => async (dispatch) => {
  const body = JSON.stringify({ data });

  createBook(body)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.bookAdd,
        payload: res.data,
      });

      dispatch(setAlert("Book created"));
    })
    .catch((err) => {});
};

// set book cover
export const addBookCover = (data) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("bookId", data.bookId);
    if (data.cover) {
      formData.append("cover", data.cover);
    }

    const res = await setBookCover(formData);
    dispatch({
      type: ACTION_TYPES.setBookCover,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    return errors;
  }
};

// get categories
export const loadCategories = () => async (dispatch) => {
  getCategories()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.loadCategories,
        payload: res.data,
      });
    })
    .catch((err) => {});
};

// load authors
export const loadAuthors = () => async (dispatch) => {
  getAuthors()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.loadAuthors,
        payload: res.data,
      });
    })
    .catch((err) => {});
};

// set rating
export const setRating = (data) => async (dispatch) => {
  const body = JSON.stringify({ data });

  createUpdateRating(body)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.setRating,
        // payload: res.data.rate.toFixed(1),
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// load favorites
export const loadFavorites = () => async (dispatch) => {
  getFavorites()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.loadFavorites,
        payload: res.data,
      });
    })
    .catch((err) => {});
};

// load user favorites books
export const loadUserFavoritesBooks = () => async (dispatch) => {
  getUserFavoritesBooks()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.loadUserFavoritesBooks,
        payload: res.data,
      });
    })
    .catch((err) => {});
};

// set favorite
export const setFavorite = (data) => async (dispatch) => {
  const body = JSON.stringify({ data });

  return addFavorite(body)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.setFavorite,
        payload: res.data,
      });
    })
    .catch((err) => {});
};
