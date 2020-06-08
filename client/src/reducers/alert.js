import { ACTION_TYPES } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.setAlert:
      return [...state, payload];

    case ACTION_TYPES.removeAlert:
      return state.filter((alert) => alert.id !== payload);

    default:
      return state;
  }
}
