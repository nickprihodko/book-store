import api from "./index";

export const getReviews = async (bookId) => {
  return await api.get(`/api/reviews/${bookId}`);
};

export const addReview = async (body) => {
  return await api.post(`/api/reviews`, body);
};

export const removeReview = async (id) => {
  return await api.delete(`/api/reviews/${id}`);
};
