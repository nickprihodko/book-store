import { ACTION_TYPES } from "./types";

import { getBooks } from "../api/books";

// load books
export const booksLoaded = () => async (dispatch) => {
  try {
    getBooks().then((res) => {
      dispatch({
        type: ACTION_TYPES.booksLoaded,
        payload: res.data,
      });
    });
  } catch (err) {}
};
