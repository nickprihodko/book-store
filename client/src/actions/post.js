import { getPosts, removePost, addPost } from "../api/posts";

import { ACTION_TYPES } from "./types";
import setAuthToken from "../utils/setAuthToken";

// get posts
export const loadPosts = (bookId) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.postsRequest,
  });

  getPosts(bookId)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.postsLoaded,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.postError,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    });
};

// create post
export const createPost = (post) => async (dispatch) => {
  setAuthToken(localStorage.token); // add token to headers
  const body = JSON.stringify(post);

  addPost(body)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.addPost,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.postError,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    });
};

// delete post
export const deletePost = (id) => async (dispatch) => {
  removePost(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.deletePost,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.postError,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    });
};
