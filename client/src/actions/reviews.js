import { getReviews, removeReview, addReview } from "../api/reviews";

import { ACTION_TYPES } from "./types";
import setAuthToken from "../utils/setAuthToken";

// get reviews
export const loadReviews = (bookId) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.reviewsRequest,
  });

  getReviews(bookId)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.reviewsLoaded,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.reviewError,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    });
};

// create review
export const createReview = (review) => async (dispatch) => {
  setAuthToken(localStorage.token); // add token to headers
  const body = JSON.stringify(review);

  addReview(body)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.addReview,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.reviewError,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    });
};

// delete review
export const deleteReview = (id) => async (dispatch) => {
  removeReview(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.deleteReview,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.reviewError,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    });
};
