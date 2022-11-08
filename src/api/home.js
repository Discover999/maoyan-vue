import request from "./http.js"

// 最受好评
// https://apis.netstart.cn/maoyan/index/topRatedMovies
export function getNiceMovie() {
    return request({
        url: "index/topRatedMovies",
        method: "get",
    });
}

// 热映列表
// https://apis.netstart.cn/maoyan/index/movieOnInfoList
// https://m.maoyan.com/ajax/movieOnInfoList
export function getMovieList() {
    return request({
        url: "index/movieOnInfoList",
        method: "get",
    });
}

// 更多热映列表
// https://apis.netstart.cn/maoyan/index/moreComingList
export function getNiceMovieList() {
    return request({
        url: "index/moreComingList",
        method: "get",
    });
}