import request from "./http.js";

// 城市列表api
// https://apis.netstart.cn/maoyan/cities.json
export function getCityList() {
    return request({
        url: "cities.json",
        method: "get"
    })
}