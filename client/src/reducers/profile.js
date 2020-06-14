import { ACTION_TYPES } from "../actions/types";

const initialState = {
  profile: null,
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.getProfile:
      return { ...state, profile: payload, loading: false };

    case ACTION_TYPES.profileError:
      return { ...state, error: payload, loading: true };

    case ACTION_TYPES.clearProfile:
      return { ...state, profile: null, loading: false };

    default:
      return state;
  }
}
