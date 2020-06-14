import api from "./index";

export const getBooks = async () => {
  return await api.get("/api/books");
};
