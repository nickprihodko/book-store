import { ACTION_TYPES } from "../actions/types";

const initialState = {
  books: [],
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.booksRequested:
      return {
        books: [],
        loading: true,
        error: null,
      };

    case ACTION_TYPES.booksLoaded:
      return {
        books: payload,
        loading: false,
        error: null,
      };

    case ACTION_TYPES.booksError:
      return {
        books: [],
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
