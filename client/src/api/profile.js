import api from "./index";

export const getProfile = async () => {
  return await api.get("/api/profile");
};

export const createUpdateProfile = async (body) => {
  return await api.post("/api/profile", body);
};
