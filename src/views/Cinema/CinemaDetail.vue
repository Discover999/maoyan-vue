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
        <div class="movie-swap"></div>
        <!-- 底部电影信息 -->
        <div class="movie-info">
          <div class="info">
            <!-- 电影标题 -->
            <div class="title">
              <span class="name">钢铁意志</span>
              <span class="sc">暂无评分</span>
            </div>
            <!-- 电影相关信息 -->
            <div class="detail">105分钟 | 历史 | 刘烨,韩雪,林永健</div>
          </div>
        </div>
      </div>
      <div class="main-part">
        <!-- 页面下方数据显示 -->
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
      cinemaId: null, //影院ID
      cinemaDetail: null, //影院详情
      cinemaShow: null, //正在上映电影列表
    };
  },
  methods: {
    getCinemaDetailFun() {
      // 获取影院详情
      getCinemaDetail({
        cinemaId: this.cinemaId, // 影院ID
      }).then((data) => {
        this.cinemaDetail = data.data;
        console.log("影院数据 => ", this.cinemaDetail);
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
        console.log("正在上映电影 => ", this.cinemaShow);
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
  watch: {},
};
</script>

<style lang="less" scoped>
.main {
  background-color: #fff;
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
  }
}
</style>