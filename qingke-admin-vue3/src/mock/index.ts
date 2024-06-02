import Mock from 'mockjs'
import { login } from './modules/login.ts'

const { mock } = Mock

mock('/admin/user/login', 'post', login)