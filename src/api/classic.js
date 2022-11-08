import request from "./http.js";

// 经典电影api
// https://apis.netstart.cn/maoyan/index/moreClassicList
export function getClassicList() {
    return request({
        url: "index/moreClassicList",
        method: "get"
    })
}