// 导入axios
import axios from "axios";
import { Toast } from 'vant';

// 全局api数据接口
// https://apis.netstart.cn/maoyan

const service = axios.create({
    baseURL: "https://apis.netstart.cn/maoyan",
    timeout: 30000,  //超时时间
    headers: {
        "Content-Type": "application/json;chatset=utf-8",
    }
})

var load = null;

// request拦截器
service.interceptors.request.use(
    (config) => {
        // 弹出Toast加载提示框...
        load = Toast.loading({
            duration: 0,
            message: '加载中...',
            forbidClick: true,
        });
        return config
    },
    (error) => {
        Toast.clear();  // 清除加载提示框
        console.log("[axios] request报错...", error);
        Promise.reject(error)
    }
)

// response拦截器
service.interceptors.response.use(
    (response) => {
        Toast.clear();  // 清除加载提示框
        return response.data;
    },
    (error) => {
        // 加载失败提示
        Toast.fail('加载失败');
        console.log("[axios] response报错...", error);
        Promise.reject(error)
    }
)

export default service