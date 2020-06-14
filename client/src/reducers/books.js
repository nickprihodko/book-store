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
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case ACTION_TYPES.booksLoaded:
      return { ...state, books: payload };

    case ACTION_TYPES.booksError:
      return {
        ...state,
        books: [],
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
