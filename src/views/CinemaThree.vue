<!-- 主页待映 -->
<template>
  <div>
    <div class="topMovie">
      <!-- 近期最受期待电影顶部横幅 -->
      <div class="title">近期最受期待</div>
      <!-- 横向列表 -->
      <div class="list">
        <div
          class="movieList"
          v-for="item in expectlist"
          :key="item.id"
          @click="goticket(item.id)"
        >
          <div class="img">
            <img :src="item.img" alt />
            <span>{{ item.wish }}人想看</span>
            <p class="like">
              <span></span>
            </p>
            <!-- 图片底部阴影层 -->
            <div></div>
          </div>
          <h4>{{ item.nm }}</h4>
          <p>{{ item.comingTitle }}</p>
        </div>
      </div>
    </div>

    <div class="main">
      <!-- 即将上映电影列表 -->
      <div class="comingList" v-for="item in readylist" :key="item.id">
        <p class="date">{{ item.comingTitle }}</p>
        <div class="item">
          <div class="left">
            <img :src="item.img" alt />
          </div>
          <div class="right">
            <div class="text">
              <h3>
                <div class="mname">
                  {{ item.nm }}
                </div>
                <!-- 2D/3D -->
                <span v-if="item.version == 'v2d imax'">
                  <img src="@/assets/img/v2dimax.png" alt="" />
                </span>
                <span v-if="item.version == 'v3d'">
                  <img src="@/assets/img/v3d.png" alt="" style="width: 18px" />
                </span>
              </h3>
              <p class="wish">
                <span>{{ item.wish }}</span>
                人想看
              </p>
              <p>主演:{{ item.star }}</p>
              <p>{{ item.showInfo }}</p>
            </div>
            <div class="buy" @click="goticket(item.id)">预售</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部导航栏 -->
    <tab-bar></tab-bar>
  </div>
</template>
  
<script>
import { getReadyMovie, getReadyMovieList } from "../api/ready.js";
import TabBar from "@/components/TabBar.vue";

export default {
  data() {
    return {
      expectlist: null,
      readylist: null,
    };
  },
  components: {
    TabBar,
  },
  methods: {
    getReadyMovieFun() {
      getReadyMovie().then((data) => {
        this.expectlist = data.coming;
      });
    },
    getReadyMovieListFun() {
      getReadyMovieList().then((data) => {
        this.readylist = data.coming;
      });
    },
    // 跳转购票页
    goticket(id) {
      this.$router.push({ name: "MovieTicket", query: { id: id } });
    },
  },
  created() {
    this.getReadyMovieFun();
    this.getReadyMovieListFun();
  },
};
</script>
  
<style lang="less">
// 顶部横幅样式
.topMovie {
  padding: 0 14px;
  background: #fff;
  border-bottom: 10px solid #f5f5f5;
  .title {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
  }
  .list {
    display: flex;
    overflow: hidden;
    overflow: scroll;
  }
  // 去除底部滚动条
  .list::-webkit-scrollbar {
    display: none;
  }
  .movieList {
    margin-right: 10px;
    padding-bottom: 10px;
    .img {
      width: 84px;
      height: 114px;
      position: relative;
      // 图片底部阴影层
      div {
        display: inline-block;
        width: 100%;
        height: 35px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
      }
      img {
        width: 84px;
        height: 114px;
      }
      span {
        position: absolute;
        font-size: 12px;
        color: #dd9d08;
        font-weight: bold;
        z-index: 1;
        left: 3px;
        bottom: 2px;
      }
      // 海报左上角心心
      .like {
        position: absolute;
        top: 0;
        left: 0;
        width: 28px;
        height: 28px;
        border-radius: 0 0 10px 0;
        background: rgba(0, 0, 0, 0.4);
        margin: 0;
        span {
          background: url(../assets/img/love.png) no-repeat;
          background-size: 100%;
          width: 10px;
          height: 10px;
          display: inline-block;
          position: absolute;
          top: 10px;
          left: 8px;
        }
      }
    }
    // 海报底部电影标题
    h4 {
      font-size: 13px;
      font-weight: bold;
      margin-top: 6px;
      height: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 84px;
    }
    // 电影标题底部上映时间
    p {
      color: #999;
      font-size: 12px;
      margin-top: 6px;
    }
  }
}
.main {
  padding-bottom: 24px;

  // 上映电影列表样式
  .comingList {
    .date {
      color: #333;
      font-size: 14px;
      margin-top: 16px;
      padding-left: 14px;
    }
    .item {
      padding-left: 14px;
      height: 114px;
      display: flex;
      align-items: center;
      .left {
        width: 64px;
        height: 90px;
        margin-right: 10px;
        img {
          width: 64px;
          height: 90px;
        }
      }
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        border-bottom: 1px solid #f5f5f5;
        height: 100%;
        overflow: hidden;
        .buy {
          color: #fff;
          background: #3c9fe6;
          height: 28px;
          width: 56px;
          text-align: center;
          line-height: 28px;
          border-radius: 20px;
          font-size: 14px;
          margin-right: 14px;
        }
        .text {
          font-size: 13px;
          color: #666;
          box-sizing: border-box;
          overflow: hidden;
          width: 80%;
          p {
            margin-top: 2px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          h3 {
            display: flex;
            .mname {
              font-size: 17px;
              font-weight: bold;
              color: #000;
              padding-right: 6px;
              //  限制最长字符
              // width: 160px;
              // white-space: nowrap;
              // overflow: hidden;
              // text-overflow: clip;
            }
            span {
              // 2D、3D标签
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 43px;
              }
            }
          }
          .wish {
            span {
              font-weight: bold;
              font-size: 16px;
              color: #faaf00;
            }
          }
        }
      }
    }
  }
}
</style>