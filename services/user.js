import request from '../utils/request'

export const sendMail = data => request('/api/user/sendMail', { method: 'POST', data })
