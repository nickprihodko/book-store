import { ACTION_TYPES } from "../actions/types";

const initialState = {
  data: [],
  loading: true,
  error: null,
  categories: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.booksRequested:
      return {
        ...state,
        data: [],
        loading: true,
        error: null,
      };

    case ACTION_TYPES.booksLoaded:
      return { ...state, data: payload, loading: false, error: null };

    case ACTION_TYPES.booksError:
      return {
        ...state,
        data: [],
        loading: false,
        error: payload,
      };

    case ACTION_TYPES.addBook:
      return { ...state, data: [...state.data, payload] };

    case ACTION_TYPES.loadCategories:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
}
