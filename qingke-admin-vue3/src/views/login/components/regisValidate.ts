import { reactive } from "vue";

interface RegisUser {
    username: string
    email: string;
    validCode: string;
    password: string;
}
interface RegisRules {
    username: ({
        trigger: string;
        message: string;
        required: boolean;
    } | {
        min: number;
        max: number;
        trigger: string;
        message: string;
    })[],
    email: {
        trigger: string;
        type: string;
        message: string;
        required: boolean;
    }[],
    password: ({
        trigger: string;
        message: string;
        required: boolean;
    } | {
        min: number;
        max: number;
        trigger: string;
        message: string;
    })[],
    validCode: {
        trigger: string;
        message: string;
        required: boolean;
    }[],
    repPassword: {
        validator: (rule: RegisRules, value: string, callback: any) => void;
        trigger: string;
    }[]
}

export const regisUser = reactive<RegisUser>({
    username: '',
    email: '',
    validCode: '',
    password: '',
    repPassword: '',
});
const validateRepPassword = (rule: RegisRules, value: string, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== regisUser.password) {
        console.log(value)
        callback(new Error('两次密码输入不一致'))
    } else {
        callback()
    }
}
export const regisRules = reactive<RegisRules>({
    username: [{
        message: '用户名不能为空',
        required: true,
        trigger: 'blur',
    },{
        min: 2,
        max: 30,
        message: '用户名长度在 2 到 30 字符',
        trigger: 'blur'
    }],
    email: [{
        type: 'email',
        message: '邮箱的格式有误',
        required: true,
        trigger: 'blur'
    }],
    validCode: [{
        message: '验证码不能为空',
        required: true,
        trigger: 'blur'
    }],
    password: [{
        message: '密码不能为空',
        required: true,
        trigger: 'blur'
    },{
        min: 6,
        max: 30,
        message: '密码长度范围必须在 6~30 字符内',
        trigger: 'blur'
    }],
    repPassword: [{
        validator: validateRepPassword,
        trigger: 'blur'
    }]
})
