import { Random } from 'mockjs'

export const login = (req) => ({
    code: 20000,
    message: '登陆成功',
})

export const register = (req) => ({
    code: 20000,
    message: '注册成功',
})

export const sendCode = (req) => ({
    code: 20000,
    message: '验证码发送成功',
})
export const checkCode = (req) => ({
    code: 20000,
    message: '验证码错误',
})