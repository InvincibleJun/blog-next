import request from "../utils/request";

export const getArticle = () => {
  return request("/api/article/get");
};

export const getOne = params => {
  return request("/api/article/getOne", { params });
};

export const getNewList = () => {
  return request("/api/article/getNewList")
}
