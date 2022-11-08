import request from "./http.js";

// 首页 => 影院列表api
// 广州20: https://apis.netstart.cn/maoyan/index/filterCinemas?ci=20
export function getCinema(params) {
    return request({
        url: "index/filterCinemas",
        method: "get",
        params
    })
}

// 附近影院列表
// https://apis.netstart.cn/maoyan/index/moreCinemas?参数
export function getmoreCinemas(params) {
    return request({
        url: "index/moreCinemas",
        method: "get",
        params
    })
}

// 影院详情
// https://apis.netstart.cn/maoyan/cinema/detail?cinemaId=17166
export function getCinemaDetail(params) {
    return request({
        url: "cinema/detail",
        method: "get",
        params
    })
}

// 影院正在上映电影列表
// https://apis.netstart.cn/maoyan/cinema/shows?cinemaId=17166&ci=1&channelId=4
export function getCinemaShow(params) {
    return request({
        url: "cinema/shows",
        method: "get",
        params
    })
}