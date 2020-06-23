import { ACTION_TYPES } from "../actions/types";

const initialState = {
  data: {},
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.bookRequest:
      return {
        ...state,
        data: {},
        loading: true,
        error: null,
      };

    case ACTION_TYPES.bookLoaded:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };

    case ACTION_TYPES.bookError:
      return {
        ...state,
        data: {},
        loading: false,
        error: payload,
      };

    case ACTION_TYPES.setRating:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
