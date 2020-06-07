import { ACTION_TYPES } from "../data/types";

const booksLoaded = (newBooks) => {
  return {
    type: ACTION_TYPES.booksLoaded,
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: ACTION_TYPES.booksRequested,
  };
};

export { booksLoaded, booksRequested };
