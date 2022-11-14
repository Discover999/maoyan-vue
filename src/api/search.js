import request from "./http.js";

// 电影搜索
// https://apis.netstart.cn/maoyan/
export function searchMovie(params) {
    return request({
        url: "search/movies",
        method: "get",
        params
    })
}

// 影院搜索
// https://apis.netstart.cn/maoyan/
export function searchCinemas(params) {
    return request({
        url: "search/cinemas",
        method: "get",
        params
    })
}