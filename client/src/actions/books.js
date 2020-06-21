import { setAlert } from "./alert";
import { ACTION_TYPES } from "./types";

import { getBooks, getBook, getCategories, createBook } from "../api/books";

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

  getBook(id)
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
