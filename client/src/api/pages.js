import api from "./index";

export const getPages = async (page) => {
  return await api.get(`/api/books?page=${page}`);
};
