import request from "./http.js";


// 近期最受期待
// https://apis.netstart.cn/maoyan/index/mostExpected
export function getReadyMovie() {
    return request({
        url: "/index/mostExpected",
        method: "get"
    })
}

// 待映列表
// https://apis.netstart.cn/maoyan/index/comingList
export function getReadyMovieList() {
    return request({
        url: "index/comingList",
        method: "get"
    })
}
