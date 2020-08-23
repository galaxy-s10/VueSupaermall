import axios from 'axios'

const service = axios.create({
    baseURL: '/mogujieapi/', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(
    // 响应成功
    response => {
        const res = response.data
        return res
    },
    // 响应失败
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 导出封装好的axios实例
export default service
