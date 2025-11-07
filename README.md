# 仿猫眼移动端网页

📽 使用 Vue.js 开发的仿猫眼电影移动端页面（学习 & 演示）。

## 技术栈

[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=plastic&logo=Node.js)](https://nodejs.org/zh-cn/)
[![NPM](https://img.shields.io/badge/-NPM-CB3837?style=plastic&logo=npm)](https://www.npmjs.com/package/npm)
[![Vue.js](https://img.shields.io/badge/-Vue.js-4FC08D?style=plastic&logo=vue.js)](https://cn.vuejs.org/)
[![VSCode](https://img.shields.io/badge/-VSCode-007ACC?style=plastic&logo=visual-studio-code)](https://code.visualstudio.com/)

### 核心

- Vue 3.x（Options API）
- Vue Router（路由管理、懒加载）
- Vuex（状态管理）
- Axios（HTTP 客户端）
- Vant（移动端组件库）
- Less（CSS 预处理器）

### 构建与工具

- Webpack（打包）
- Babel（语法转译）
- ESLint（代码规范）

## 预览地址

[仿猫眼电影（移动版）](https://maoyan-vue.vercel.app/) （如不可用，可能由部署或接口问题引起）

## 快速开始

1. 克隆仓库

```bash
git clone https://github.com/Discover999/maoyan-vue.git
cd maoyan-vue
```

2. 安装依赖

```bash
npm install
```

3. 启动开发环境

```bash
npm run serve
```

打开浏览器并访问 <http://localhost:8080> 查看

## 项目结构（简要）

```
maoyan-vue/
├── public/
│   └── index.html
├── src/
│   ├── api/        # 接口封装
│   ├── assets/     # 图片 / 字体 / css
│   ├── components/ # 公共组件
│   ├── router/     # 路由配置
│   ├── store/      # Vuex
│   ├── views/      # 页面级组件
│   ├── App.vue
│   └── main.js
├── package.json
└── README.md
```

## 项目演示

<img src="src/Screenshot/m1.png" width="260px"> <img src="src/Screenshot/m2.png" width="260px"> <img src="src/Screenshot/m3.png" width="260px"> <img src="src/Screenshot/m4.png" width="260px"> <img src="src/Screenshot/m5.png" width="260px"> <img src="src/Screenshot/m6.png" width="260px"> <img src="src/Screenshot/m7.png" width="260px"> <img src="src/Screenshot/m8.png" width="260px"> <img src="src/Screenshot/m9.png" width="260px">

## 注意事项

- 部分接口为第三方或教学用途，可能存在响应慢或不可用的情况。
- 若遇到数据加载异常，请稍候重试或自行替换为可用接口。

## 贡献

感谢你的关注！如果本仓库对你有帮助，欢迎点个 Star ⭐

## 许可证与免责声明

本项目仅用于学习与演示，不作商业用途。使用时请遵守相关 API 服务条款。

---

