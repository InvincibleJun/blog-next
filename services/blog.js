import request from "../utils/request";

export const getArticle = () => {
  return request("/v1/article/get");
};

export const getOne = params => {
  return request("/v1/article/getOne", { params });
};

export const getNewList = () => {
  return request("/v1/article/getNewList")
}
