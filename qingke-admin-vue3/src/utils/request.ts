import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

interface ResponseData<T = any> {
    code: number;
    data?: T;
    message?: string;
}

const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config
    },
    (error: AxiosError) => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response: AxiosResponse<ResponseData>) => {
        // Some example codes here:
        // code == 20000: success
        // code == 50001: invalid access token
        // code == 50002: already login in other place
        // code == 50003: access token expired
        // code == 50004: invalid user (user not exist)
        // code == 50005: username or password is incorrect
        // You can change this part for your own usage.
        const res = response.data
        if (res.code !== 20000) {
            ElMessage({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return response.data
        }
    },
    (error: AxiosError) => {
        const message = error.response?.data?.message || error.message;
        ElMessage({
            message: message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service