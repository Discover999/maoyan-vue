<!-- 主页热映 -->
<template>
  <div class="main">
    <!-- 最受好评电影顶部横幅 -->
    <div class="topBanner">
      <div class="title">最受好评电影</div>
      <div class="list" v-if="topRatedMovies">
        <div
          class="moviesList"
          v-for="item in topRatedMovies.movieList"
          :key="item.movieId"
          @click="
            $router.push({ name: 'MovieDetail', query: { id: item.movieId } })
          "
        >
          <div class="img">
            <img :src="item.poster" />
            <span v-if="item.score"> 观众评分&nbsp;{{ item.score }} </span>
            <span v-else> 暂无评分 </span>
            <!-- 图片底部阴影层 -->
            <div class="shadow"></div>
          </div>
          <!-- 图片底部电影名称 -->
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>

    <!-- 电影列表项 -->
    <div class="MovieList" v-if="MoreMovieList">
      <div
        class="item"
        v-for="item in MoreMovieList.movieList"
        :key="item.id"
        @click="$router.push({ name: 'MovieDetail', query: { id: item.id } })"
      >
        <!-- 项左图片 -->
        <div class="itemLeft">
          <img :src="item.img" alt />
        </div>
        <!-- 项右详情及按钮 -->
        <div class="itemRight">
          <div class="details">
            <!-- 电影名 -->
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

            <p class="score" v-if="item.sc">
              观众评
              <span>{{ item.sc }}</span>
            </p>
            <p class="score" v-else>暂无评分</p>

            <p>主演:{{ item.star }}</p>
            <p>
              <span>{{ item.showInfo }}</span>
            </p>
          </div>
          <div
            class="buy"
            v-if="item.showStateButton.content != '预售'"
            @click="goticket(item.id)"
          >
            购票
          </div>
          <div class="presale" v-else>预售</div>
        </div>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>
  
<script>
import { getNiceMovie, getMovieList } from "../api/home.js";
import TabBar from "@/components/TabBar.vue";

export default {
  data() {
    return {
      topRatedMovies: null,
      MoreMovieList: null,
    };
  },
  components: {
    TabBar,
  },

  methods: {
    getNiceMovieFun() {
      getNiceMovie().then((data) => {
        this.topRatedMovies = data;
        // console.log(this.topRatedMovies.movieList);
      });
    },
    getMovieListFun() {
      getMovieList().then((data) => {
        this.MoreMovieList = data;
        // console.log(this.MoreMovieList.coming);
      });
    },
    // 跳转购票页
    goticket(id) {
      this.$router.push({ name: "MovieTicket", query: { id: id } });
    },
  },

  created() {
    this.getNiceMovieFun();
    this.getMovieListFun();
  },
};
</script>
  
<style lang="less">
.topBanner {
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

  .moviesList {
    margin-right: 10px;
    padding-bottom: 20px;

    .img {
      width: 84px;
      height: 114px;
      position: relative;

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

      .shadow {
        display: inline-block;
        width: 100%;
        height: 35px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-image: linear-gradient(rgba(77, 77, 77, 0), #000);
      }
    }

    p {
      font-size: 13px;
      font-weight: bold;
      margin-top: 6px;
      height: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 84px;
    }
  }
}

.MovieList {
  padding-bottom: 48px;

  .item {
    padding-left: 14px;
    height: 114px;
    display: flex;
    align-items: center;

    .itemLeft {
      width: 64px;
      height: 90px;
      margin-right: 10px;

      img {
        width: 64px;
        height: 90px;
      }
    }

    .itemRight {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      border-bottom: 1px solid #f0f0f0;
      height: 100%;
      overflow: hidden;

      .details {
        font-size: 13px;
        color: #666;
        box-sizing: border-box;
        overflow: hidden;
        width: 80%;

        p {
          margin-top: 4px;
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

        .score {
          span {
            font-weight: bold;
            font-size: 16px;
            color: #faaf00;
          }
        }
      }

      .buy {
        color: #fff;
        background: #f03d37;
        height: 28px;
        width: 56px;
        text-align: center;
        line-height: 28px;
        border-radius: 20px;
        font-size: 14px;
        margin-right: 14px;
      }

      .presale {
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
    }
  }
}
</style>