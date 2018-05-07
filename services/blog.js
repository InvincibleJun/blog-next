import request from '../utils/request'

export const getArticle = () => request('/v1/article/get')

export const getOne = params => request('/v1/article/getOne', { params })

export const getNewList = () => request('/v1/article/getNewList')
