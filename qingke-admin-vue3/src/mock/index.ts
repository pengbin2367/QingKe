import Mock from 'mockjs'
import { login, register, sendCode, checkCode } from './modules/login.ts'

const { mock } = Mock

mock('/admin/user/login', 'post', login)
mock('/admin/user/register', 'post', register)
mock('/admin/user/sendCode', 'post', sendCode)
mock('/admin/user/checkCode', 'post', checkCode)