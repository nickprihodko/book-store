import { ACTION_TYPES } from "../actions/types";

const initialState = {
  book: {},
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.bookRequest:
      return {
        ...state,
        book: {},
        loading: true,
        error: null,
      };

    case ACTION_TYPES.bookLoaded:
      return { ...state, book: payload, loading: false, error: null };

    case ACTION_TYPES.bookError:
      return {
        ...state,
        books: {},
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
