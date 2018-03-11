import axios from "axios";

const baseUrl = "http://localhost:10086";

export default function (url, arg = {}) {
  const { method = "get", params } = arg;
  return axios({
    method: method,
    url: baseUrl + url,
    params
  });
}
