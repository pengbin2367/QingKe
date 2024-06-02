import request from "../utils/request.ts";

export const login = (data) => request({ url: '/admin/user/login', method: 'post', data })