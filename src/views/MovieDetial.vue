<template>
  <!-- 电影详情页 -->
  <div class="main">
    <loading v-if="isloading"></loading>

    <div class="movie-page" v-if="!isloading">
      <div class="detail-page">
        <!-- 顶部导航字 -->
        <div class="navbar">猫眼电影 &gt; 电影</div>

        <!-- 电影信息 -->
        <div class="movie-info-top">
          <div class="topleft">
            <img src="@/assets/201.jpg" alt="" />
          </div>
          <div class="topright">
            <div class="desc">
              <h1>电影名</h1>
              <p>123456</p>
              <p>123456</p>
              <p>wxfwxfwxfwxf</p>
              <p>2022-09-09</p>
            </div>
            <div class="botton">
              <div class="want">
                <img src="@/assets/img/want-to-watch.png" alt="" /> 想看
              </div>
              <div class="watched">
                <img src="@/assets/img/star.png" alt="" /> 看过
              </div>
            </div>
          </div>
        </div>

        <!-- 评分 -->
        <div class="movie-score">
          <div class="score-info">
            <div class="score-top">
              <!-- 评分顶部 -->
              <div class="sleft">
                <img src="@/assets/img/catlogo.png" alt="" />
                <p>猫眼购票评分</p>
              </div>
              <!-- 评分底部 -->
              <div class="sright">
                <p>5138521 人想看</p>
                &nbsp;&nbsp;
                <p>2654874 人看过</p>
                <img
                  class="right"
                  src="@/assets/img/arrow-right.png"
                  alt="右箭头"
                />
              </div>
            </div>
            <!-- 评分主体 -->
            <div class="score-middle">
              <div class="left-section">
                <div class="left">
                  <span>9.6</span>
                  <div class="pepnum">393,861 人评</div>
                </div>
                <div class="right">
                  <!-- 评分星级分布 -->
                  <div class="stars-bar">
                    <div class="stars">
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div class="percent" style="width: 91.2%"></div>
                    </div>
                  </div>
                  <div class="stars-bar">
                    <div class="stars">
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div class="percent" style="width: 10.2%"></div>
                    </div>
                  </div>
                  <div class="stars-bar">
                    <div class="stars">
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div class="percent" style="width: 6.2%"></div>
                    </div>
                  </div>
                  <div class="stars-bar">
                    <div class="stars">
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div class="percent" style="width: 1.2%"></div>
                    </div>
                  </div>
                  <div class="stars-bar">
                    <div class="stars">
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div class="percent" style="width: 2%"></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="right-reputation">
                <div class="box">
                  <div class="rank">
                    <span class="top">TOP</span>
                    <span class="rank-num">1</span>
                  </div>
                  <div class="topdesc">
                    <span class="first">2022年10月</span>
                    <span class="second">大陆票房榜</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <!-- 简介 -->
        <div class="movie-introduction">
          <div class="title">
            <p>简介</p>
            <span @click="open" v-show="!isOpen"
              >展开<img
                class="down"
                src="@/assets/img/arrow-right.png"
                alt="向下箭头"
            /></span>
            <span @click="putaway" v-show="isOpen"
              >收起<img
                class="up"
                src="@/assets/img/arrow-right.png"
                alt="向上箭头"
            /></span>
          </div>
          <div :class="[isOpen ? 'intro' : 'intro m']">
            <p>
              这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍
              这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍
              这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍
              这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍
              这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍
              这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍
              这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍
              这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍这是影片介绍
            </p>
          </div>
        </div>

        <!-- 演员 -->
        <div class="actors">
          <div class="title">
            <p>演职人员</p>
            <span
              >全部
              <img
                class="right"
                src="@/assets/img/arrow-right.png"
                alt="右箭头"
              />
            </span>
          </div>

          <div class="actor-list">
            <ul>
              <!-- 这里循环 -->
              <li>
                <!-- 这里循环 -->
                <div class="act-img">
                  <img src="@/assets/102.jpg" alt="" />
                </div>
                <p>演员名</p>
                <span>角色？？</span>
              </li>
              <li>
                <!-- 这里循环 -->
                <div class="act-img">
                  <img src="@/assets/102.jpg" alt="" />
                </div>
                <p>演员名</p>
                <span>角色？？</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 视频推荐 -->
        <div class="videos">
          <div class="title">
            <p>视频推荐</p>
            <span
              >全部
              <img
                class="right"
                src="@/assets/img/arrow-right.png"
                alt="右箭头"
            /></span>
          </div>
          <div class="videos-list">
            <ul>
              <li>
                <div class="videoimg">
                  <img src="@/assets/poster.jpg" class="poster" />
                  <img src="@/assets/img/play-video.png" alt="" class="btn" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- 剧照 -->
        <div class="photos">
          <div class="title">
            <p>剧照</p>
            <span
              >全部
              <img
                class="right"
                src="@/assets/img/arrow-right.png"
                alt="右箭头"
            /></span>
          </div>
          <div class="photos-list">
            <ul>
              <li>
                <img src="@/assets/poster.jpg" />
              </li>
              <li>
                <img src="@/assets/poster.jpg" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 票房 -->
      <div class="box-office">
        <div class="cont">
          <div class="title">
            <p>票房</p>
            <span
              >票房详情
              <img
                class="right"
                src="@/assets/img/arrow-right-black.png"
                alt="右箭头"
            /></span>
          </div>
          <div class="data-box">
            <div class="item">
              <div class="value">2</div>
              <div class="name">昨日排名</div>
            </div>
            <div class="item">
              <div class="value">43,332</div>
              <div class="name">首周票房(万)</div>
            </div>
            <div class="item">
              <div class="value">155,011</div>
              <div class="name">累计票房(万)</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 相关快讯 -->
      <div class="informations">
        <div class="cont">
          <div class="title">
            <p>相关快讯</p>
            <span
              >全部
              <img
                class="right"
                src="@/assets/img/arrow-right-black.png"
                alt="右箭头"
            /></span>
          </div>
          <div class="information-box">
            <div class="info">
              <div class="content">
                <div class="top">
                  <span>《万里归途》金鸡影展举行特别放映感谢观众</span>
                  <img src="@/assets/poster.jpg" alt="" />
                </div>
                <div class="bottom">
                  <div class="left">用户</div>
                  <div class="right">点赞</div>
                </div>
              </div>
              <div class="content">
                <div class="top">
                  <span>《万里归途》金鸡影展举行特别放映感谢观众</span>
                  <img src="@/assets/poster.jpg" alt="" />
                </div>
                <div class="bottom">
                  <div class="left">用户</div>
                  <div class="right">点赞</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部声明 -->
      <div class="disclaimer">
        <p class="content">
          <span>影视行业信息</span>
          <a
            href="https://i.maoyan.com/terms/private?id=privacy_1629962927685"
            class="link"
            to="http://m.maoyan.com/terms/private?id=privacy_1629962927685"
            >《免责声明》</a
          >
          <span>I 违法和不良信息举报电话：400601890</span>
        </p>
        <div class="bottom-logo">
          <img alt="" src="@/assets/img/bottom-logo.png" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { getMovieDetail } from "@/api/detail";
import Loading from "@/components/Loding.vue";

export default {
  data() {
    return {
      movieId: null, // 电影ID值
      isloading: true, //页面加载提示
      isOpen: false, //简介文字展开
      isShow: false, //简介文字收回
      movieDetail: null, //电影数据
      actorlist: null, //演员数据
      mbox: null, //票房数据
      newslist: null, //相关资讯
      videos: null, //视频
      pictures: null, //剧照
    };
  },
  methods: {
    getMovieDetailFun() {
      getMovieDetail().then((data) => {
        this.movieDetail = data;
        // console.log(this.movieDetail.movieList);
      });
    },
    open() {
      this.isOpen = true;
    },
    putaway() {
      this.isOpen = false;
    },
  },
  created() {
    // this.getMovieDetailFun();
  },
  mounted() {},
  components: { Loading },
};
</script>
  
<style lang="less" scoped>
.main {
  .movie-page {
    background-color: #f4f4f4;
    .detail-page {
      padding: 21px 16px;
      background-color: #664d29;
      .navbar {
        color: #ccc;
        font-size: 14px;
        margin-bottom: 15px;
      }
      .movie-info-top {
        display: flex;
        .topleft {
          img {
            width: 100px;
          }
        }
        .topright {
          margin-left: 12px;
          flex: 1;
          .desc {
            color: #fff;
            h1 {
              font-weight: bold;
              margin-bottom: 4px;
            }
            p {
              padding: 1px 0;
              font-size: 13px;
              color: #ccc;
            }
          }
          .botton {
            display: flex;
            width: 100%;
            margin-top: 2px;
            font-size: 14px;
            color: #fff;
            line-height: 32px;
            justify-content: space-between;
            img {
              width: 14px;
              height: 14px;
              margin-right: 4px;
            }
            .want {
              display: flex;
              // flex: 1;
              width: 48%;
              background-color: #9b8b74;
              justify-content: center;
              align-items: center;
              border-radius: 4px;
            }
            .watched {
              display: flex;
              // flex: 1;
              width: 48%;
              background-color: #9b8b74;
              justify-content: center;
              align-items: center;
              border-radius: 4px;
            }
          }
        }
      }
      .movie-score {
        // 电影评分横幅条
        margin-top: 15px;
        background-color: #543f22;
        border-radius: 6px;
        .score-info {
          padding: 9px 10px 10px 10px;
          .score-top {
            display: flex;
            font-size: 12px;
            color: #fff;
            justify-content: space-between;
            .sleft {
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              img {
                width: 14px;
                height: 14px;
                margin-right: 4px;
              }
            }
            .sright {
              display: flex;
              justify-content: center;
              align-items: center;
              opacity: 0.6;
              .right {
                margin-left: 6px;
                width: 5px;
                height: 8px;
              }
            }
          }
          .score-middle {
            padding: 11px 0 3px 0;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .left-section {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-grow: 1;
              .left {
                margin-right: 8px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                span {
                  color: #ffb400;
                  font-size: 24px;
                  font-weight: bold;
                }
                .pepnum {
                  display: block;
                  font-size: 11px;
                  color: hsla(0, 0%, 100%, 0.4);
                  opacity: 0.6;
                  text-align: center;
                }
              }
              .right {
                .stars-bar {
                  // 评分星级样式
                  display: flex;
                  align-items: center;
                  margin-bottom: 4px;
                  .stars {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    opacity: 0.4;
                    img {
                      width: 5px;
                      height: 5px;
                      margin-left: 1.5px;
                    }
                  }
                  .bar {
                    // 星级进度条
                    width: 64px;
                    height: 4px;
                    margin-left: 4px;
                    background-color: hsla(0, 0%, 100%, 0.06);
                    border-radius: 1px;
                    .percent {
                      height: 4px;
                      background-color: #8f816e;
                    }
                  }
                }
              }
            }
            .right-reputation {
              // 评分主体右侧TOP榜
              margin-right: 10px;
              // width: 38px;
              border: 1px solid #947c54;
              border-radius: 4px;
              .box {
                display: flex;
                justify-content: space-between;
                .rank {
                  display: flex;
                  flex: 1;
                  font: 14px;
                  color: #fff;
                  position: absolute;
                  flex-direction: column;
                  width: 10px;
                  margin-left: 2px;
                }
                .topdesc {
                  display: flex;
                  flex: 1;
                  flex-direction: column;
                  font-size: 10px;
                }
              }
            }
          }
        }
      }
      .movie-introduction {
        // 简介
        padding-top: 16px;
        color: #fff;
        .title {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          span {
            display: flex;
            justify-content: space-between;
            color: #ccc;
            font-size: 12px;
            align-items: center;
            img {
              margin-left: 6px;
              height: 8px;
              width: 5px;
            }
            .down {
              -moz-transform: rotate(-90deg);
              -webkit-transform: rotate(-90deg);
              transform: rotate(90deg);
            }
            .up {
              transform: rotate(-90deg);
            }
          }
        }
        .intro {
          margin: 7px 0;
          font-size: 14px;
          text-align: justify;
        }
        .m {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
      .actors {
        font-size: 16px;
        margin: 18px 0 15px 0;
        color: #fff;
        .title {
          display: flex;
          justify-content: space-between;
          span {
            display: flex;
            justify-content: space-between;
            color: #ccc;
            font-size: 12px;
            align-items: center;
            .right {
              margin-left: 6px;
              width: 5px;
              height: 8px;
            }
          }
        }
        .actor-list {
          // 演员列表
          margin-top: 12px;
          // padding-bottom: 20px;
          display: flex;
          overflow: hidden;
          overflow: scroll;
          ul {
            white-space: nowrap;
            li {
              display: inline-block;
              margin-right: 8px;
              img {
                width: 80px;
              }
              p {
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width: 100%;
                font-size: 12px;
              }
              span {
                display: block;
                text-align: center;
                opacity: 0.4;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width: 100%;
                font-size: 12px;
              }
            }
          }
        }
        .actor-list::-webkit-scrollbar {
          display: none;
        }
      }
      .videos {
        // 视频
        padding-top: 16px;
        color: #fff;
        .title {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          span {
            display: flex;
            justify-content: space-between;
            color: #ccc;
            font-size: 12px;
            align-items: center;
            .right {
              margin-left: 6px;
              width: 5px;
              height: 8px;
            }
          }
        }
        .videos-list {
          // 视频推荐列表
          margin-top: 12px;
          display: flex;
          overflow: hidden;
          overflow: scroll;
          ul {
            white-space: nowrap;
            li {
              display: inline-block;
              margin-right: 8px;
              .videoimg {
                position: relative;
                .poster {
                  width: 140px;
                  border-radius: 12px;
                  z-index: 1;
                }
                .btn {
                  // 视频上方播放按钮
                  position: absolute;
                  height: 32px;
                  width: 32px;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  z-index: 2;
                }
              }
            }
          }
        }
      }
      .photos {
        // 剧照
        padding-top: 16px;
        color: #fff;
        .title {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          span {
            display: flex;
            justify-content: space-between;
            color: #ccc;
            font-size: 12px;
            align-items: center;
            .right {
              margin-left: 6px;
              width: 5px;
              height: 8px;
            }
          }
        }
        .photos-list {
          margin-top: 12px;
          display: flex;
          overflow: hidden;
          overflow: scroll;
          ul {
            white-space: nowrap;
            li {
              display: inline-block;
              margin-right: 8px;
              img {
                width: 140px;
              }
            }
          }
        }
      }
    }
    .box-office {
      // 票房样式
      margin-top: 15px;
      background-color: #fff;
      height: 130px;
      .cont {
        padding: 0 15px;
        .title {
          display: flex;
          justify-content: space-between;
          height: 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            display: flex;
            justify-content: space-between;
            color: #999;
            font-size: 12px;
            align-items: center;
            .right {
              margin-left: 6px;
              width: 5px;
              height: 8px;
            }
          }
        }
        .data-box {
          // 票房数据
          background-color: #f8f8f8;
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item {
            flex-grow: 1;
            text-align: center;
            padding: 12px 0 12px;
            .value {
              font-size: 17px;
              color: #f03d37;
            }
            .name {
              margin-top: 4px;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }
    }
    .disclaimer {
      // 影视行业信息样式
      margin-top: 40px;
      text-align: center;
      .content {
        text-align: center;
        margin: 0;
        font-size: 12px;
        line-height: 16px;
        color: #999;
        a {
          color: #4e759e;
        }
      }
      .bottom-logo {
        // 最底部logo
        text-align: center;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
        img {
          display: inline-block;
          height: 24px;
        }
      }
    }
    .informations {
      // 相关快讯样式
      margin-top: 15px;
      .cont {
        background-color: #fff;
        .title {
          padding: 0 15px;
          display: flex;
          justify-content: space-between;
          height: 48px;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e8e8e8;
          span {
            display: flex;
            justify-content: space-between;
            color: #666;
            font-size: 12px;
            align-items: center;
            .right {
              margin-left: 6px;
              width: 5px;
              height: 8px;
            }
          }
        }
        .information-box {
          .info {
            padding: 0 15px;
            .content {
              padding: 15px 0 12px 0;
              border-bottom: 1px solid #e6e6e6;
              .top {
                display: flex;
                font-size: 16px;
                img {
                  margin-left: 4px;
                  height: 78px;
                }
              }
              .bottom {
                display: flex;
                margin-top: 8px;
                justify-content: space-between;
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
      }
    }
  }
}
</style>