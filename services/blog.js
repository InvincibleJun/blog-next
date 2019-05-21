import request from "../utils/request";

export const getArticles = query => request("/articles", { query });

export const getTags = () => request("/tags");

export const getOne = params => request("/articles/:_id", { params });
