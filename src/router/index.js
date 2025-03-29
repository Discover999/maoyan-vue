// 导入
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import MovieDetail from '../views/Movies/MovieDetial.vue'
import Video from '../views/Videos/Video.vue'
import ShortVideo from '../views/Videos/ShortVideo.vue'
import VideoPlay from '../views/Videos/Play.vue'
import MyPosition from '../views/Home/MyPosition.vue'
import Search from '../views/Home/Search.vue'
import MyMine from '../views/Mine/MyMine.vue'
import Login from '../views/Mine/Login.vue'
import MovieTicket from '../views/Movies/MovieTicket.vue'
import CinemaDetail from '../views/Cinema/CinemaDetail.vue'
import CinemaInfo from '../views/Cinema/CinemaInfo.vue'

// 全局路由配置
const routes = [
  {
    path: "/",
    redirect: "/index/one"
  },
  {
    // 猫眼首页
    path: '/index',
    name: "index",
    redirect: '/index/one',
    component: Home,
    children: [
      // 各子页面
      {
        // 热映
        path: "one",
        name: "one",
        component: () => import("../views/CinemaOne.vue")
      },
      {
        // 影院
        path: "two",
        name: "two",
        component: () => import("../views/CinemaTwo.vue")
      },
      {
        // 待映
        path: "three",
        name: "three",
        component: () => import("../views/CinemaThree.vue")
      },
      {
        // 经典电影
        path: "four",
        name: "four",
        component: () => import("../views/CinemaFour.vue")
      }
    ]
  },
  {
    // 电影详情页
    path: '/moviedetail',
    name: "MovieDetail",
    component: MovieDetail,
  },
  {
    // 影院详情页
    path: '/cinemadetail',
    name: "CinemaDetail",
    component: CinemaDetail,
  },
  {
    // 影院信息页
    path: '/cinemainfo',
    name: "CinemaInfo",
    component: CinemaInfo,
  },
  {
    // 电影购票页
    path: '/ticket',
    name: "MovieTicket",
    component: MovieTicket,
  },
  {
    // 城市列表
    path: '/position',
    name: "position",
    component: MyPosition,
  },
  {
    // 主页搜素
    path: '/search',
    name: "search",
    component: Search,
  },
  {
    // 视频页面
    path: '/videos',
    name: "videos",
    // 重定向推荐页
    redirect: '/videos/recommend',
    component: Video,
    children: [
      {
        // 视频 => 推荐
        path: "recommend",
        name: "recommend",
        component: () => import("../views/Videos/Video1.vue")
      },
      {
        // 视频 => 热片解读
        path: "hot",
        name: "hot",
        component: () => import("../views/Videos/Video2.vue")
      },
      {
        // 视频 => 新片预告
        path: "coming",
        name: "coming",
        component: () => import("../views/Videos/Video3.vue")
      },
      {
        // 视频 => 速看电影
        path: "sukan",
        name: "sukan",
        component: () => import("../views/Videos/Video4.vue")
      },
      {
        // 视频 => 剧集综艺
        path: "zongyi",
        name: "zongyi",
        component: () => import("../views/Videos/Video5.vue")
      },
    ]
  },
  {
    // 视频播放页
    path: "/play",
    name: "play",
    component: () => import("../views/Videos/VideoPlay.vue")
  },
  {
    // 小视频页面
    path: '/video',
    name: "ShortVideo",
    component: ShortVideo,
  },
  {
    // 小视频播放页面
    path: '/VideoPlay',
    name: "VideoPlay",
    component: VideoPlay,
  },
  {
    // 【我的】=> 登录页面
    path: '/login',
    name: "login",
    component: Login,
  },
  {
    // 我的详细页面
    path: '/mine',
    name: "mine",
    component: MyMine,
    beforeEnter: (to, from, next) => {
      // 路由守卫
      let MyId = window.localStorage.getItem("userId")
      if (MyId) {
        next();
        return
      } else {
        // 若本地没有userId值则跳转登录  
        next("/login")
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
