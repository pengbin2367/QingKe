import { reactive } from "vue";

interface LoginUser {
    email: string,
    password: string
}
interface LoginRules {
    email: {
        trigger: string;
        type: string;
        message: string;
        required: boolean
    }[];
    password: ({
        trigger: string;
        message: string;
        required: boolean
    } | {
        min: number;
        max: number;
        trigger: string;
        message: string
    })[]
}
export const loginUser = reactive<LoginUser>({
    email: '',
    password: ''
});
export const loginRules = reactive<LoginRules>({
    email: [{
        type: 'email',
        message: '邮箱格式有误',
        required: true,
        trigger: 'blur'
    }],
    password: [{
        message: '密码不能为空',
        required: true,
        trigger: 'blur'
    },{
        min: 6,
        max: 16,
        message: '密码长度必须在 6～16 字符内',
        trigger: 'blur'
    }]
})
