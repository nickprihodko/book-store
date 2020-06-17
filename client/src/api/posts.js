import api from "./index";

export const getPosts = async (bookId) => {
  return await api.get(`/api/posts/${bookId}`);
};

export const addPost = async (body) => {
  return await api.post(`/api/posts`, body);
};

export const removePost = async (id) => {
  return await api.delete(`/api/posts/${id}`);
};
