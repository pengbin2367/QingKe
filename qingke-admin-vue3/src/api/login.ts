import request from "@/utils/request.ts";

export const login = (data) => request({ url: '/admin/user/login', method: 'post', data })
export const register = (data) => request({ url: '/admin/user/register', method: 'post', data })
export const sendCode = (data) => request({ url: '/admin/user/sendCode', method: 'post', data })
export const checkCode = (data) => request({ url: '/admin/user/checkCode', method: 'post', data })