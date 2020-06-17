import { ACTION_TYPES } from "../actions/types";

const initialState = {
  books: [],
  loading: true,
  error: null,
  categories: [],
  filter: { sort: "", category: null },

  // sort: "",
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
      return { ...state, books: payload, loading: false, error: null };

    case ACTION_TYPES.booksError:
      return {
        ...state,
        books: [],
        loading: false,
        error: payload,
      };

    // filter
    case ACTION_TYPES.setSort:
      return { ...state, filter: { ...state.filter, sort: payload } };

    case ACTION_TYPES.setCategory:
      return { ...state, filter: { ...state.filter, category: payload } };

    case ACTION_TYPES.loadCategories:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
}
