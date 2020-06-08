import { ACTION_TYPES } from "../actions/types";

const initialState = {
  books: [],
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.booksRequested:
      return {
        books: [],
        loading: true,
        error: null,
      };

    case ACTION_TYPES.booksLoaded:
      return {
        books: action.payload,
        loading: false,
        error: null,
      };

    case ACTION_TYPES.booksError:
      return {
        books: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
