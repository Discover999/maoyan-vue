import request from "./http.js";

// 电影详情页api
// https://apis.netstart.cn/maoyan/movie/detail?movieId=1224712
export function getMovieDetail(params) {
    return request({
        url: "movie/detail",
        method: "get",
        params
    })
}