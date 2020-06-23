import api from "./index";

export const getBooks = async (queryParams) => {
  if (queryParams) {
    return await api.get(`/api/books${queryParams}`);
  } else {
    return await api.get("/api/books");
  }
};

export const getBook = async (id) => {
  return await api.get(`/api/books/${id}`);
};

export const createBook = async (body) => {
  return await api.post(`/api/books`, body);
};

export const getCategories = async () => {
  return await api.get("/api/categories");
};

export const getAuthors = async () => {
  return await api.get("/api/authors");
};

export const createUpdateRating = async (body) => {
  return await api.patch("/api/books/rating", body);
};

export const getFavorites = async () => {
  return await api.get("/api/favorites");
};

export const addFavorite = async (body) => {
  return await api.patch("/api/books/favorite", body);
};
