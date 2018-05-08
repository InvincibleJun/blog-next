import axios from 'axios'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://120.78.222.240:10086/api'
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
