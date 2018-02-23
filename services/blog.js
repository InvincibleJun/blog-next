import request from '../utils/request'

export const getArticle = (arg) => {
  return request('/api/article/get', { method: 'get' })
}