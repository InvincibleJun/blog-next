import axios from 'axios';

const baseUrl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:7777/api' : 'http://localhost:7777/api';

export default function(url, arg = {}) {
  const { method = 'get', query, params, data } = arg;
  if (params) {
    Object.keys(params).forEach(key => {
      url = url.replace(new RegExp(`:(${key})`), (v, $1) => {
        console.log(params[key])
        return params[key]
      })
    })
  }
  
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: baseUrl + url,
      params: query,
      data
    })
      .then(response => {
        if (response.data.code === 200) {
          resolve(response.data.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
