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
} from "../api/books";

// load books
export const booksLoaded = (queryParams) => async (dispatch) => {
  getBooks(queryParams)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.booksLoaded,
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
