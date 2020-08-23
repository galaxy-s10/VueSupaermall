import request from 'api/request'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata',
        method: 'get',
    })
}
export function getHomeGood(type, page) {
    return request({
        url: '/home/data',
        method: 'get',
        params: {
            type, page
        }
    })
}