import request from "./http.js";

// 小视频api
// https://apis.netstart.cn/maoyan/video/short/0
export function getShortVideo() {
    return request({
        url: "video/short/0",
        method: "get"
    })
}

// 视频 => 推荐
// https://apis.netstart.cn/maoyan/video/0
export function getVideos1() {
    return request({
        // url: "video/0",
        url: "video/0?feedChannelId=0",
        method: "get"
    })
}

// 视频 => 热片解读
// 请求参数：query
// 字段：feedChannelId
// 1067226：预告片、1331498：热片解读、1074953：速看电影、1307354：剧集综艺
// https://apis.netstart.cn/maoyan/video/0?feedChannelId=1331498
export function getVideos2() {
    return request({
        url: "video/0?feedChannelId=1331498",
        method: "get"
    })
}

// 视频 => 新片预告
// https://apis.netstart.cn/maoyan/video/0?feedChannelId=1067226
export function getVideos3() {
    return request({
        url: "video/0?feedChannelId=1067226",
        method: "get"
    })
}

// 视频 => 速看电影
// https://apis.netstart.cn/maoyan/video/0?feedChannelId=1074953
export function getVideos4() {
    return request({
        url: "video/0?feedChannelId=1074953",
        method: "get"
    })
}

// 视频 => 剧集综艺
// https://apis.netstart.cn/maoyan/video/0?feedChannelId=1307354
export function getVideos5() {
    return request({
        url: "video/0?feedChannelId=1307354",
        method: "get"
    })
}

