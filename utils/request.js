import axios from 'axios';

const baseUrl = 'http://localhost:3000'

export default function (url, arg) {
  return axios({
    method: arg.method,
    url: baseUrl + url
  });
}