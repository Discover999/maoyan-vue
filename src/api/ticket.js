import request from "./http.js";

// 影片介绍（购票页面简介）
// https://apis.netstart.cn/maoyan/movie/intro?movieId=1359975
export function getMovieIntro(params) {
    return request({
        url: "movie/intro",
        method: "get",
        params
    })
}

// 影片上映日期
// https://apis.netstart.cn/maoyan/movie/showdays?movieId=1359975&cityId=20
export function getShowDay(params) {
    return request({
        url: "movie/showdays",
        method: "get",
        params
    })
}

// 影片上映影院筛选条件
// https://apis.netstart.cn/maoyan/movie/select/cinemas?limit=20&showDate=2022-11-18&movieId=1359975&cityId=20
export function getShowCinemas(params) {
    return request({
        url: "movie/select/cinemas",
        method: "get",
        params
    })
}