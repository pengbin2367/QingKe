import Mock from 'mockjs'
import { login, register, sendCode } from './modules/login.ts'

const { mock } = Mock

mock('/admin/user/login', 'post', login)
mock('/admin/user/register', 'post', register)
mock('/admin/user/sendCode', 'post', sendCode)