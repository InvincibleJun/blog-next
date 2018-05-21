import axios from 'axios'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:10086/api'
    : '/api'

export default function (url, arg = {}) {
  const { method = 'get', params, data } = arg
  return axios({
    method,
    url: baseUrl + url,
    params,
    data
  })
}
