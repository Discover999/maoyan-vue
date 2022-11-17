<template>
  <div>
    <div class="ticketTop">
      <!-- 头部logo -->
      <span class="backto" @click="$router.go(-1)">&lt;</span>
      <header>猫眼电影</header>
      <div class="headerRight">
        <span class="iconfont icon-liebiao2"> </span>
      </div>
    </div>

    <div class="ticket-page">
      <!-- 影片详情 -->
      <div class="movie-detail" v-if="MovieIntro">
        <div class="dleft">
          <div class="mask"></div>
          <div
            class="poster-bg"
            :style="'background-image: url(' + MovieIntro.img + ')'"
          ></div>
          <!-- 详情 -->
          <div class="detail">
            <!-- 左侧海报 -->
            <div class="poster">
              <img :src="MovieIntro.img" class="poster-img" />
            </div>
            <!-- 右侧详情 -->
            <div class="content">
              <h2 class="title">{{ MovieIntro.nm }}</h2>
              <p>{{ MovieIntro.enm }}</p>
              <div class="score">
                <span v-show="MovieIntro.sc">{{ MovieIntro.sc }}</span>
                <span v-show="!MovieIntro.sc">暂无评分</span>
              </div>
              <div class="type">
                <span>{{ MovieIntro.cat }}</span>
                <div class="type-img" v-show="MovieIntro.ver.includes('IMAX')">
                  <img src="@/assets/img/imax.png" alt="" />
                </div>
              </div>
              <p>
                {{ MovieIntro.src }}&nbsp;/&nbsp;{{ MovieIntro.episodeDur }}分钟
              </p>
              <p>{{ MovieIntro.pubDesc }}</p>
            </div>
          </div>
        </div>
        <div
          class="dright"
          @click="
            $router.push({
              name: 'MovieDetail',
              query: { id: movieId },
            })
          "
        >
          <img src="@/assets/img/arrow-right-black.png" alt="" />
        </div>
      </div>

      <!-- 日期及筛选条件 -->
      <div class="selectCon" v-if="showday">
        <div class="days-warp">
          <!-- 日期选择 -->
          <div class="days">
            <div
              class="day-chosen"
              v-for="(item, index) in showday"
              :key="index"
            >
              <span>{{ item.date | date }}</span>
            </div>
          </div>
        </div>
        <div class="nav-warp">
          <div class="filter-nav">
            <!-- 详细筛选条件 -->
            <MySelect
              class="myselect"
              :cityip="cityip"
              :districtid="districtid"
              :halltype="halltype"
              :brandid="brandid"
              :serviceid="serviceid"
              @becomedid="becomedid"
              @becomehid="becomehid"
              @becomeeid="becomeeid"
              @becomebid="becomebid"
            >
            </MySelect>
          </div>
        </div>
      </div>

      <!-- 结果显示 -->
      <div class="show-cinema">
        <!-- 影院主体内容 -->
        <div v-if="cinemaList">
          <div class="cinema" v-for="(item, index) in cinemaList" :key="index">
            <!-- 影院详情条目 -->
            <div class="info">
              <h3>{{ item.name }}</h3>
              <span
                >{{ item.sellPrice }}
                <p>&nbsp;元起</p></span
              >
            </div>
            <!-- 地址及距离 -->
            <div class="local">
              <p>{{ item.addr }}</p>
              <span>{{ item.distance }}</span>
            </div>

            <!-- 影院支持的服务 -->
            <!-- 判断并改变服务卡样式bor -->
            <div class="tag">
              <div
                :class="[
                  item.labels[0].name == '小吃' ? 'bor' : '',
                  item.labels[0].name == '影城卡' ? 'bor' : '',
                ]"
                v-if="item.labels[0]"
              >
                {{ item.labels[0].name }}
              </div>
              <div
                :class="[
                  item.labels[1].name == '小吃' ? 'bor' : '',
                  item.labels[1].name == '影城卡' ? 'bor' : '',
                ]"
                v-if="item.labels[1]"
              >
                {{ item.labels[1].name }}
              </div>
              <div
                :class="[
                  item.labels[2].name == '小吃' ? 'bor' : '',
                  item.labels[2].name == '影城卡' ? 'bor' : '',
                ]"
                v-if="item.labels[2]"
              >
                {{ item.labels[2].name }}
              </div>
              <div
                :class="[
                  item.labels[3].name == '小吃' ? 'bor' : '',
                  item.labels[3].name == '影城卡' ? 'bor' : '',
                ]"
                v-if="item.labels[3]"
              >
                {{ item.labels[3].name }}
              </div>
              <div
                :class="[
                  item.labels[4].name == '小吃' ? 'bor' : '',
                  item.labels[4].name == '影城卡' ? 'bor' : '',
                ]"
                v-if="item.labels[4]"
              >
                {{ item.labels[4].name }}
              </div>
              <div
                :class="[
                  item.labels[5].name == '小吃' ? 'bor' : '',
                  item.labels[5].name == '影城卡' ? 'bor' : '',
                ]"
                v-if="item.labels[5]"
              >
                {{ item.labels[5].name }}
              </div>
            </div>

            <!-- 条目开卡特惠 -->
            <div class="tag2" v-if="item.promotion.cardPromotionTag">
              <img src="@/assets/img/card.png" alt="折扣卡图标" />
              <div>{{ item.promotion.cardPromotionTag }}</div>
            </div>
            <!-- 底部场次信息 -->
            <div class="tag3" v-if="item.showTimes">
              <div>{{ item.showTimes }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getShowDay, getMovieIntro, getShowCinemas } from "@/api/ticket.js";
import MySelect from "@/components/MySelect.vue";

export default {
  props: ["cityip"],
  data() {
    return {
      movieId: null, //影片id
      active: 2, //激活导航栏
      showday: null, //影片上映日期
      MovieIntro: null, //影片简介信息

      districtid: null, //行政区id
      halltype: null, //影厅类型
      brandid: null, //品牌
      serviceid: null, //影院服务
      lat: null, //地理定位纬度
      lng: null, //地理定位经度
      position: null, //位置
      local: "", //地址
      cinemaList: null,
    };
  },
  methods: {
    getShowDayFun() {
      // 获取上映时间
      getShowDay({ movieId: this.movieId }).then((data) => {
        this.showday = data.data.dates;
        // console.log("影片上映日期 => ", this.showday);
      });
    },
    getMovieIntroFun() {
      // 获取影片的基本信息
      getMovieIntro({ movieId: this.movieId }).then((data) => {
        this.MovieIntro = data.data.movie;
        // console.log("影片信息 => ", this.MovieIntro);
      });
    },
    getShowCinemasFun() {
      // 获取影片上映影院列表
      getShowCinemas({
        // 请求参数：query
        movieId: this.movieId,
        offset: 0,
        client: "iphone",
        channelId: 4,
        cityId: this.cityip,
        showDate: "2022-11-17",
        districtId: this.districid, // 行政区id
        hallType: this.halltype, // 影厅类型
        brandIds: this.brandid, // 品牌
        serviceIds: this.serviceid, // 影院服务
        lat: this.lat, //纬度
        lng: this.lng, //经度
      }).then((data) => {
        this.cinemaList = data.data.cinemas;
        console.log("影院列表 => ", this.cinemaList);
      });
    },

    // 改变行政区id
    becomedid(id) {
      this.districid = id;
    },
    // 改变影厅类型id
    becomehid(id) {
      this.halltype = id;
    },
    // 改变品牌id
    becomebid(id) {
      this.brandid = id;
    },
    // 改变影院服务id
    becomeeid(id) {
      this.serviceid = id;
    },
  },
  created() {
    this.movieId = this.$route.query.id; //获取传来的id值
    // console.log("movieId => ", this.movieId);
    // console.log("城市 => ", this.cityip);
    if (this.movieId != null) {
      this.getShowDayFun(); //获取上映日
      this.getMovieIntroFun(); //获取基本信息
      this.getShowCinemasFun(); // 获取影院列表
    }
  },
  components: {
    MySelect,
  },
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
  },
};
</script>

<style lang="less" scoped>
.ticketTop {
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

// 内容样式
.ticket-page {
  .movie-detail {
    // 头部电影介绍
    position: relative;
    height: 188px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    .mask {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: #333;
    }
    .poster-bg {
      line-height: 1.15;
      color: #777;
      text-size-adjust: 100%;
      font-size: 12px;
      cursor: pointer;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      position: absolute;
      filter: blur(26px);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.55;
    }
    .detail {
      display: flex;
      padding: 19px 30px 19px 15px;
      height: 150px;
      .poster {
        // 海报样式
        width: 110px;
        height: 150px;
        background: url("@/assets/img/default-bg.png");
        background-size: 100% 100%;
        .poster-img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        // 影片右侧详情样式
        overflow-x: hidden;
        margin-left: 12.5px;
        line-height: 1;
        color: #fff;
        .title {
          font-size: 20px;
          margin-top: 2px;
          font-weight: bold;
          overflow: hidden;
        }
        p {
          margin-top: 10px;
          opacity: 0.8;
        }
        .score {
          margin-top: 11px;
          font-size: 18px;
          font-weight: 700;
          color: #fc0;
        }
        .type {
          margin-top: 10px;
          opacity: 0.8;
          .type-img {
            display: inline-block;
            margin-left: 5px;
            width: 42px;
            height: 13px;
            vertical-align: top;
            opacity: 0.85;
            img {
              width: 26px;
            }
          }
        }
      }
    }
    .dright {
      // 右箭头
      position: absolute;
      width: 10px;
      height: 14.6px;
      right: 15px;
      top: 50%;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .selectCon {
    // 中间选择部分
    position: sticky;
    background-color: #fff;
    top: 0;
    width: 100%;
    z-index: 2;
    .days-warp {
      height: 45px;
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
          font-size: 14px;
          text-align: center;
          color: #666;
          // border-bottom: 2px solid #f03d37;
          // color: #f03d37;
        }
        // 去除底部滚动条
      }
      .days::-webkit-scrollbar {
        display: none;
      }
    }
    .nav-warp {
      // 筛选条件样式
      position: relative;
      width: 100%;
      height: 40px;
      background-color: #fff;
      z-index: 11;
      .filter-nav {
        position: relative;
        top: -160px;
      }
    }
  }
  .show-cinema {
    // 影院列表
    .cinema {
      // 影院条目样式
      margin-left: 14px;
      padding: 14px 14px 14px 0;
      border-bottom: 1px solid #f2f2f2;
      .info {
        // 详细信息样式
        display: flex;
        justify-content: space-between;
        align-items: center;
        white-space: nowrap;
        span {
          // 价格
          display: flex;
          justify-content: flex-end;
          align-items: center;
          color: #f03d37;
          font-size: 18px;
          p {
            // [元起]
            color: #f03d37;
            font-size: 12px;
          }
        }

        h3 {
          // 影院名称
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          // width: 240px;
        }
      }
      .local {
        // 地址及距离
        display: flex;
        justify-content: space-between;
        margin-top: 4px;
        p {
          // 影院地址
          font-size: 13px;
          height: 18px;
          margin-top: 4px;
          color: #666;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        span {
          margin-top: 8px;
          color: #666;
          font-size: 13px;
          height: 18px;
        }
      }
      .tag {
        // 影院服务
        display: flex;
        margin-top: 4px;
        div {
          // 默认样式
          padding: 0 2px;
          font-size: 12px;
          border: 1px solid #589daf;
          border-radius: 2px;
          margin-right: 4px;
          color: #589daf;
        }
        .bor {
          // 【小吃】【折扣卡】高亮样式
          border-color: #f90;
          color: #f90;
        }
      }
      .tag2,
      .tag3 {
        // 底部样式
        display: flex;
        color: #999999;
        font-size: 12px;
        align-items: center;
        margin-top: 8px;
        img {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
}
</style>