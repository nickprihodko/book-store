import { ACTION_TYPES } from "../data/types";

const initialState = {
  books: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.booksRequested:
      return {
        books: [],
        loading: true,
      };

    case ACTION_TYPES.booksLoaded:
      return {
        books: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
