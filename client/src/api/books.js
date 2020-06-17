import api from "./index";

import getSearchString from "../utils/getSearchString";

export const getBooks = async (filter) => {
  if (filter) {
    const searchString = getSearchString(filter, null);

    return await api.get(`/api/books?${searchString}`);
  } else {
    return await api.get("/api/books");
  }
};

export const getBook = async (id) => {
  return await api.get(`/api/book/${id}`);
};

export const getCategories = async () => {
  return await api.get("/api/categories");
};
