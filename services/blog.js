import request from "../utils/request";

export const getArticle = arg => {
  return request("/api/article/get");
};

export const getOne = params => {
  return request("/api/article/getOne", { params });
};
