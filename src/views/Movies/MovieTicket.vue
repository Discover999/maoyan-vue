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
      <div class="movie-detail">
        <div class="dleft">
          <div class="mask"></div>
          <div class="poster-bg"></div>
          <!-- 详情 -->
          <div class="detail">
            <!-- 左侧海报 -->
            <div class="poster">
              <img src="@/assets/bgbg.jpg" class="poster-img" />
            </div>
            <!-- 右侧详情 -->
            <div class="content">
              <h2 class="title">扫黑行动</h2>
              <p>THE TIPPING POINT</p>
              <div class="score">
                <span>暂无评分</span>
              </div>
              <div class="type">
                <span>犯罪,动作</span>
                <div class="type-img">
                  <img src="@/assets/img/imax.png" alt="" />
                </div>
              </div>
              <p>中国大陆/99分钟</p>
              <p>2022-11-11 18:00中国大陆上映</p>
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
      <div class="select-day">中部详情</div>

      <!-- 结果显示 -->
      <div class="show-cinema">影院详情</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movieId: null, //影片id
    };
  },
  created() {
    this.movieId = this.$route.query.id; //获取传来的id值
    // console.log("movieId => ", this.movieId);
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
    font-size: 32px;
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
      background-image: url("@/assets/bgbg.jpg");
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
}
</style>