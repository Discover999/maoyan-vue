import request from "./http.js";

// 城市列表api
// https://apis.netstart.cn/maoyan/cities.json
export function getCityList() {
    return request({
        url: "cities.json",
        method: "get"
    })
}

// 根据经纬度获取当前城市
// https://apis.netstart.cn/maoyan/city/latlng?lat=纬度&lng=经度
export function getPosition(params) {
    return request({
        url: "city/latlng",
        method: "get",
        params
    })
}