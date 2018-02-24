import axios from 'axios';

const baseUrl = 'http://localhost:10086'

export default function (url, arg) {
  return axios({
    method: arg.method,
    url: baseUrl + url
  });
}