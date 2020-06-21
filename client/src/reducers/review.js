import { ACTION_TYPES } from "../actions/types";

const initialState = {
  data: [],
  review: "",
  loading: false,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.reviewsRequest:
      return { ...state, loading: true, error: null };

    case ACTION_TYPES.reviewsLoaded:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };

    case ACTION_TYPES.addReview:
      return { ...state, data: [payload, ...state.data] };

    case ACTION_TYPES.deleteReview:
      return {
        ...state,
        data: state.data.filter((review) => review.id !== action.payload),
        loading: false,
        error: null,
      };

    case ACTION_TYPES.reviewError:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
