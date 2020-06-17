import { ACTION_TYPES } from "../actions/types";

const initialState = {
  posts: [],
  post: "",
  loading: false,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.postsRequest:
      return { ...state, loading: true, error: null };

    case ACTION_TYPES.postsLoaded:
      return {
        ...state,
        posts: payload,
        loading: false,
        error: null,
      };

    case ACTION_TYPES.addPost:
      return { ...state, posts: [payload, ...state.posts] };

    case ACTION_TYPES.deletePost:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false,
        error: null,
      };

    case ACTION_TYPES.postError:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
