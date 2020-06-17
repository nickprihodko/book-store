import { ACTION_TYPES } from "./types";

import { getBooks, getBook, getCategories } from "../api/books";

// load books
export const booksLoaded = (filter) => async (dispatch) => {
  getBooks(filter)
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

// set sort
export const setSort = (sort) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.setSort,
    payload: sort,
  });
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

// set category
export const setCategory = (category) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.setCategory,
    payload: category,
  });
};
