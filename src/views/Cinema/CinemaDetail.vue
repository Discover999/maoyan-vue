<template>
  <!-- 影院详情 -->
  <div class="main">
    <div class="cinemaTop" v-if="cinemaDetail">
      <!-- 头部logo -->
      <span class="backto" @click="$router.go(-1)">&lt;</span>
      <!-- <header>猫眼电影</header> -->
      <header>{{ cinemaDetail.nm }}</header>
      <div class="headerRight">
        <span class="iconfont icon-liebiao2"> </span>
      </div>
    </div>
    <div class="cinemaDetail" v-if="cinemaDetail">
      <!-- 顶部地址部分 -->
      <div class="cinema-info">
        <h2>{{ cinemaDetail.nm }}</h2>
        <p class="addr">{{ cinemaDetail.addr }}</p>
        <div class="local-icon">
          <img src="@/assets/img/position.png" alt="" />
        </div>
      </div>
      <div class="movie-list">
        <!-- 电影海报展示 -->
        <div class="movie-swap" v-if="movieList">
          <div
            class="post-bg"
            :style="'background-image: url(' + coverbg + ')'"
          />
          <div class="post-bg1"></div>
          <div class="list-swap">
            <!-- 影片滑动列 -->
            <div
              class="one"
              v-for="(item, index) in movieList"
              :key="index"
              :class="index == active ? 'active' : ''"
            >
              <img :src="item.img" alt="" @click="getIndex(index)" />
            </div>
          </div>
        </div>
        <!-- 底部电影信息 -->
        <div class="movie-info" v-if="selectShow">
          <div class="info">
            <!-- 电影标题 -->
            <div class="title">
              <span class="name">{{ selectShow.nm }}</span>
              <span class="sc" v-if="selectShow.sc == 0.0">暂无评分</span>
              <span class="sc" v-else> {{ selectShow.sc }}</span>
            </div>
            <!-- 电影相关简介信息 -->
            <div class="detail">{{ selectShow.desc }}</div>
          </div>
        </div>
      </div>
      <div class="main-part">
        <!-- 页面下方数据显示 -->
        <div class="date-nav" v-if="showsInfo">
          <!-- 日期选择 -->
          <div class="days">
            <div
              class="day-chosen"
              v-for="(item, index) in showsInfo"
              :key="index"
              :class="index == dateselect ? 'dateselect' : ''"
              @click="selectDate(index, item)"
            >
              <span>{{ item.showDate | date }}</span>
            </div>
          </div>
        </div>
        <div class="vip">
          <!-- 优惠信息 -->
          <div class="vip-tip" v-if="vipInfo">
            <div class="vleft">
              <span class="lab">折扣</span>
              <p>{{ vipInfo.desc }}</p>
            </div>
            <div class="vright">
              <!-- <span>4.9元起开卡</span> -->
              <img src="@/assets/img/arrow-right-black.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 内容主体 -->
        <div class="show-list" v-if="listInfo">
          <div class="item">
            <div
              class="show-item"
              v-for="(item, index) in listInfo"
              :key="index"
            >
              <!-- 时间 -->
              <div class="time">
                <div class="t">{{ item.tm }}</div>
                <div class="b">{{ item.tm }}散场</div>
              </div>
              <!-- 播放信息 -->
              <div class="info">
                <div class="ver">{{ item.lang }}&nbsp;{{ item.tp }}</div>
                <div class="local">{{ item.th }}</div>
              </div>
              <!-- 价格 -->
              <div class="price">
                <span class="ico">￥</span>
                <div class="p">{{ item.sellPr }}</div>
                <div class="car">
                  <span class="tag">{{ item.vipPriceName }}</span>
                  <span class="pri">￥{{ item.vipPrice }}</span>
                </div>
              </div>
              <!-- 【购票】 -->
              <div class="btn">
                <div class="buy">购票</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!moviecount" class="nomore">
          <img class="noimg" src="@/assets/img/today-no-show.png" alt="" />
          <div class="text">今日场次已映完</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCinemaDetail, getCinemaShow } from "@/api/cinema.js";

export default {
  props: ["cityip"],
  data() {
    return {
      active: 0, //影片选择Index
      dateselect: 0, //日期选择Index
      coverbg: null, //影片选择列背景(模糊)
      cinemaId: null, //影院ID
      cinemaDetail: null, //影院详情
      cinemaShow: null, //正在上映电影列表
      movieList: null, //电影列表
      showIndex: 0, //选择的电影的Index值
      selectShow: null, //选择的电影数据
      showsInfo: null, //播放日期
      moviedur: 0, //影片时长
      moviecount: 1, //当日放映场次
      listInfo: null, //上映时间详细
      vipInfo: null, //日期下面的优惠信息
    };
  },
  methods: {
    selectDate(index, item) {
      // 选择日期
      this.dateselect = index; //赋值高亮
      this.listInfo = item.plist; //详细
      this.moviecount = this.listInfo.length;
      // console.log("详细 => ", this.listInfo);
    },
    getIndex(index) {
      // 切换影片执行动作
      this.active = index; //赋值高亮效果
      this.showIndex = index; //取出点击索引号
      this.dateselect = 0; //切换影片后将日期跳回当日
      this.selectShow = this.movieList[index]; //取出对应索引号数据
      this.coverbg = this.selectShow.img; //获取背景图
      this.showsInfo = this.selectShow.shows; //取出播放信息
      this.listInfo = this.showsInfo[0].plist; //取出第一天的影院播放信息
      this.moviedur = this.selectShow.dur; //获取当前影片时长
      this.moviecount = this.listInfo.length;
      // console.log("点击的Index => ", this.showIndex);
      // console.log("点击取出的影片信息 => ", this.selectShow);
      // console.log("影片播放信息 => ", this.showsInfo);
    },
    getCinemaDetailFun() {
      // 获取影院详情
      getCinemaDetail({
        cinemaId: this.cinemaId, // 影院ID
      }).then((data) => {
        this.cinemaDetail = data.data;
        this.vipInfo = this.cinemaDetail.vipInfo;
        // console.log("影院数据 => ", this.cinemaDetail);
        // console.log("优惠 => ", this.vipInfo);
      });
    },
    getCinemaShowFun() {
      // 获取正在上映电影列表
      getCinemaShow({
        cinemaId: this.cinemaId, // 影院ID
        ci: this.cityip, //城市ID
        channelId: 4,
      }).then((data) => {
        this.cinemaShow = data;
        this.movieList = data.data.movies;
        this.selectShow = this.movieList[0]; //默认赋值第0项数据
        this.coverbg = this.selectShow.img; //获取背景图
        this.showsInfo = this.selectShow.shows; //取出影院播放信息
        this.listInfo = this.showsInfo[0].plist; //取出第一天的影院播放信息
        // console.log("正在上映电影 => ", this.cinemaShow);
        // console.log("电影列表 => ", this.movieList);
      });
    },
  },
  created() {
    this.cinemaId = this.$route.query.id; //获取影院的id值
    // console.log("CinemaID => ", this.cinemaId);
    if (this.cinemaId) {
      this.getCinemaDetailFun();
      this.getCinemaShowFun();
    }
  },
  computed: {},
  watch: {},
  filters: {
    // 格式化日期
    date: (val) => {
      var val = new Date(val); // 转换成日期格式
      // let year = val.getFullYear(); // 年
      let month = val.getMonth() + 1; //月
      let day = val.getDate(); //日
      var ofday = ""; //差几天
      var week = ""; //周几
      let wk = val.getDay(); //获取一周中的第几天
      let weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

      // 今明后
      let today = new Date().getDate(); // 今天是几号
      let offset = Math.abs(day - today); //计算差值
      if (offset < 3) {
        if (offset === 0) {
          ofday = "今天";
        } else if (offset === 1) {
          ofday = "明天";
        } else if (offset === 2) {
          ofday = "后天";
        }
      } else {
        week = weeks[wk]; //若超过后天则返回周几
      }

      return `${ofday}${week}${month}月${day}日`; //返回格式化后数据
    },
    time: (val) => {
      let time = val.split(":"); //以:为分隔切割时间
      var hour = parseInt(time[0]); //取出时
      var minute = parseInt(time[1]); //取出分
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  // background-color: #f0f0f0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .cinemaTop {
    // 头部样式
    display: flex;
    justify-content: space-between;
    background-color: #e54847;
    color: #fff;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    .backto {
      font-size: 16px;
      font-weight: bold;
      font-family: "宋体";
      margin: 0 15px;
    }
    header {
      margin: 0 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .headerRight {
      margin-left: 10px;
      span {
        margin: 0 10px;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .cinemaDetail {
    .cinema-info {
      background-color: #fff;
      position: relative;
      padding: 15px 100px 15px 15px;
      h2 {
        font-size: 17px;
        line-height: 24px;
        font-weight: 700;
        color: #333;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .addr {
        margin-top: 2px;
        font-size: 13px;
        line-height: 18.5px;
        color: #999;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .local-icon {
        position: absolute;
        right: 0;
        top: 50%;
        width: 70px;
        height: 31px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
        border-left: 1px solid #d8d8d8;
        img {
          display: inline-block;
          width: 19px;
          height: 22px;
          margin-top: 5px;
        }
      }
    }
    .movie-list {
      overflow: hidden;
      .movie-swap {
        padding: 20px 15px 20px 5px;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        z-index: 1;
        .post-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-size: contain;
          -webkit-filter: blur(30px);
          filter: blur(30px);
          background-position-y: 40%;
          background-size: 100%;
          overflow: hidden;
          z-index: -1;
        }
        .post-bg1 {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #40454d;
          opacity: 0.55;
        }
        .list-swap {
          position: relative;
          // width: 100%;
          // height: 100%;
          z-index: 1;
          display: flex;
          display: -webkit-box;
          display: -webkit-flex;
          overflow: hidden;
          overflow-x: auto;
          white-space: nowrap;
          .one {
            // background-color: #fff;
            width: 65px;
            height: 95px;
            margin-left: 15px;
            display: inline-block;
            flex-shrink: 0;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .active {
            //影片选中高亮
            width: 75px;
            height: 105px;
            border: 3px solid #fff;
            // transition: all 0.5s;
            // transition: width 1s;
            // -moz-transition: width 1s;
            // -webkit-transition: width 1s;
            // -o-transition: width 1s;
          }
        }
        // 去除底部滚动条
        .list-swap::-webkit-scrollbar {
          display: none;
        }
      }
      .movie-info {
        height: 66.5px;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        .info {
          padding: 11px 15px;
          text-align: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          .title {
            // 海报底部
            height: 24px;
            line-height: 24px;
            font-size: 17px;
            color: #333;
            font-weight: 700;
            overflow: hidden;
            .name {
              // 电影名
              margin-right: 5px;
            }
            .sc {
              color: #ffb400;
              font-size: 16px;
            }
          }
          .detail {
            margin-top: 2px;
            height: 18.5px;
            line-height: 18.5px;
            font-size: 13px;
            color: #999;
            overflow: hidden;
          }
        }
      }
    }
    .main-part {
      .date-nav {
        .days {
          // 日期选择
          position: relative;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          width: 100%;
          height: 45px;
          background-color: #fff;
          overflow-x: auto;
          z-index: 11;
          .day-chosen {
            flex: none;
            min-width: 115px;
            line-height: 43px;
            margin-left: 4.5px;
            font-size: 16px;
            text-align: center;
            color: #666;
          }
          .dateselect {
            border-bottom: 2.5px solid #f03d37;
            color: #f03d37;
          }
        }
        // 去除底部滚动条
        .days::-webkit-scrollbar {
          display: none;
        }
      }
      .vip {
        margin-top: -1px;
        background-color: #fff5ea;
        .vip-tip {
          padding: 0 15px;
          height: 42px;
          line-height: 42px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .vleft {
            // 开卡享优惠
            display: flex;
            justify-content: flex-start;
            align-items: center;
            // flex: 1 1 auto;
            // color: #60b8e1;
            color: #ff941a;
            font-size: 12px;
            .lab {
              background-color: #ff941a;
              -webkit-box-flex: 0;
              -webkit-flex: 0 0 auto;
              flex: 0 0 auto;
              display: inline-block;
              // background-color: #60b8e1;
              border-radius: 2px;
              font-size: 10px;
              line-height: 15px;
              height: 15px;
              width: 34px;
              text-align: center;
              color: #fff;
              // margin-top: 13px;
              margin-right: 10px;
            }
          }
          .vright {
            // 4.9元起开卡
            display: flex;
            justify-content: flex-end;
            align-items: center;
            // flex: 0 0 auto;
            line-height: 42px;
            color: #999;
            font-size: 12px;
            img {
              margin-left: 4px;
              height: 12px;
              width: 8px;
            }
          }
        }
      }
      .show-list {
        // 今日播放影片信息
        .item {
          padding: 5px 12.5px;
          position: relative;
          border: none;
          background-color: #fff;
          .show-item {
            display: flex;
            padding: 12px 0;
            border-bottom: 1px solid #f3f3f3;
            border-top: 1px solid #f3f3f3;
            .btn {
              // 购票
              width: 45px;
              margin-left: 2px;
              position: relative;
              .buy {
                position: absolute;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 100%;
                height: 25px;
                line-height: 26px;
                font-size: 12px;
                border: 1px solid #f06762;
                border-radius: 50px;
                color: #f03d37;
                text-align: center;
              }
            }
            .time {
              // 时间
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              .t {
                // 18:00
                font-size: 20px;
                color: #333;
                line-height: 1;
                white-space: nowrap;
              }
              .b {
                // 19:50散场
                margin-top: 6px;
                color: #999;
                font-size: 11px;
                line-height: 1;
                white-space: nowrap;
              }
            }
            .info {
              // 播放信息
              margin-left: 17px;
              flex: 1;
              .ver {
                // 播放版本
                margin-top: 2px;
                line-height: 18px;
                font-size: 13px;
                color: #333;
                white-space: normal;
              }
              .local {
                // 播放影厅
                margin-top: 7px;
                font-size: 11px;
                color: #999;
                white-space: normal;
              }
            }
            .price {
              // 价格
              display: flex;
              flex: 0 1 auto;
              width: 130px;
              margin-left: 5px;
              justify-content: center;
              align-items: center;
              text-align: center;
              .ico {
                // ￥
                font-size: 11px;
                color: #f03d37;
              }
              .p {
                display: inline-block;
                line-height: 1;
                color: #f03d37;
                margin-top: 1px;
                font-size: 19px;
              }
              .car {
                // 会员优惠
                display: inline-block;
                line-height: 15px;
                height: 15px;
                -webkit-transform: scale(0.8);
                transform: scale(0.8);
                -webkit-transform-origin: left;
                transform-origin: left;
                margin: 0 -16px 0 4px;
                border: 1px solid #ff9000;
                border-radius: 2px;
                font-size: 12px;
                .tag {
                  display: inline-block;
                  color: #fff;
                  background-color: #f90;
                }
                .pri {
                  display: inline-block;
                  padding: 0 2px;
                  color: #f90;
                  background-color: #fff;
                }
              }
            }
          }
        }
      }
      .nomore {
        // 无
        // color: red;
        text-align: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        height: 210px;
        // background-color: #f0f0f0;
        .noimg {
          display: inline-block;
          margin: 50px auto 0;
          width: 77.5px;
          height: 71.5px;
        }
        .text {
          // 今日场次已映完
          margin-top: 12px;
          line-height: 1;
          font-size: 16px;
          color: #acacac;
        }
      }
    }
  }
}
</style>