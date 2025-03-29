<template>
  <!-- 电影详情页 -->
  <div class="main" v-if="this.movieInfo">
    <!-- <loading v-if="isloading"></loading> -->

    <div class="movie-page" v-if="!isloading">
      <div
        class="detail-page"
        :style="'background-color: ' + movieInfo.backgroundColor"
      >
        <!-- 顶部导航字 -->
        <div class="navbar">
          <p @click="$router.push('/')">猫眼电影</p>
          &nbsp;&gt;&nbsp;{{ movieInfo.nm }}
        </div>

        <!-- 电影信息 -->
        <div class="movie-info-top">
          <div class="topleft">
            <img :src="movieInfo.img" alt="电影海报图" />
            <img class="playico" src="@/assets/img/poster-play.png" alt="" />
          </div>
          <div class="topright">
            <div class="desc">
              <h1>{{ movieInfo.nm }}</h1>
              <p>{{ movieInfo.enm }}</p>
              <p class="tag">
                {{ movieInfo.cat }}
                <img
                  src="@/assets/img/movie-tag-2DIMAX.png"
                  alt="movie-tag"
                  v-show="movieInfo.ver.includes('IMAX 2D')"
                />
                <img
                  src="@/assets/img/movie-tag-3D.png"
                  alt="movie-tag"
                  v-show="movieInfo.ver.includes('3D')"
                />
                <img
                  src="@/assets/img/movie-tag-3DIMAX.png"
                  alt="movie-tag"
                  v-show="movieInfo.ver.includes('IMAX 3D')"
                />
              </p>

              <p class="star">{{ movieInfo.star }}</p>
              <p>
                {{ movieInfo.onlineDate }}&nbsp;/&nbsp;{{ movieInfo.dur }}分钟
              </p>
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

        <!-- 影片有评分 -->
        <div class="movie-score">
          <div class="score-info" v-if="movieInfo.sc">
            <div class="score-top">
              <!-- 评分左侧 -->
              <div class="sleft">
                <img src="@/assets/img/catlogo.png" alt="" />
                <p>猫眼购票评分</p>
              </div>
              <!-- 评分右侧 -->
              <div class="sright">
                <p>{{ movieInfo.wish | num }}&nbsp;人想看</p>
                &nbsp;&nbsp;
                <p>{{ movieInfo.watched | num }}&nbsp;人看过</p>
                <img
                  class="right"
                  src="@/assets/img/arrow-right.png"
                  alt="右箭头"
                />
              </div>
            </div>
            <!-- 评分主体 -->
            <div class="score-middle">
              <!-- 有评分 -->
              <div class="left-section">
                <div class="left">
                  <span>{{ movieInfo.sc }}</span>
                  <div class="pepnum">{{ movieInfo.snum | num }}人评</div>
                </div>
                <div class="right" v-if="mrate">
                  <!-- 评分星级分布 -->
                  <div class="stars-bar">
                    <!-- SCORE_LEVEL_9_10 -->
                    <div class="stars">
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div
                        class="percent"
                        :style="'width:' + mrate[0].percent * 100 + '%'"
                      ></div>
                    </div>
                  </div>
                  <div class="stars-bar">
                    <!-- SCORE_LEVEL_7_8 -->
                    <div class="stars">
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div
                        class="percent"
                        :style="'width:' + mrate[1].percent * 100 + '%'"
                      ></div>
                    </div>
                  </div>
                  <div class="stars-bar">
                    <!-- SCORE_LEVEL_5_6 -->
                    <div class="stars">
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div
                        class="percent"
                        :style="'width:' + mrate[2].percent * 100 + '%'"
                      ></div>
                    </div>
                  </div>
                  <div class="stars-bar">
                    <!-- SCORE_LEVEL_3_4 -->
                    <div class="stars">
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div
                        class="percent"
                        :style="'width:' + mrate[3].percent * 100 + '%'"
                      ></div>
                    </div>
                  </div>
                  <div class="stars-bar">
                    <!-- SCORE_LEVEL_1_2 -->
                    <div class="stars">
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/grey-star.png" alt="" />
                      <img src="@/assets/img/white-star.png" alt="" />
                    </div>
                    <div class="bar">
                      <div
                        class="percent"
                        :style="'width:' + mrate[4].percent * 100 + '%'"
                      ></div>
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

          <!-- 影片无评分 -->
          <div class="score-info" v-if="!movieInfo.sc">
            <div class="score-top">
              <!-- 评分左侧 -->
              <div class="sleft">
                <img src="@/assets/img/catlogo.png" alt="" />
                <p>猫眼想看</p>
              </div>
              <!-- 评分右侧 -->
              <div class="sright"></div>
            </div>
            <!-- 评分主体 -->
            <div class="score-middle">
              <!-- 无评分显示想看人数 -->
              <div class="left-section" v-if="!movieInfo.sc">
                <div class="left">
                  <div class="wish">
                    <span>{{ movieInfo.wish | num }}</span>
                    <p>人想看</p>
                  </div>
                </div>
              </div>
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
            <p>{{ movieInfo.dra }}</p>
          </div>
        </div>

        <!-- 演员 -->
        <div class="actors" v-if="actorlist">
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
              <li v-for="item in actorlist" :key="item.id">
                <!-- 这里循环 -->
                <div class="act-img">
                  <img :src="item.avatar" alt="" />
                </div>
                <p>{{ item.cnm }}</p>
                <span>{{ item.desc }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 视频推荐 -->
        <div class="videos" v-if="videos">
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
              <li v-for="(item, index) in videos" :key="index">
                <div class="videoimg">
                  <img class="poster" :src="item.video.imgUrl" />
                  <img
                    src="@/assets/img/play-video.png"
                    alt="play-btn"
                    class="btn"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- 剧照 -->
        <div class="photos" v-if="pictures">
          <div class="title">
            <p>剧照</p>
            <span
              >全部{{ movieInfo.pn }}张
              <img
                class="right"
                src="@/assets/img/arrow-right.png"
                alt="右箭头"
            /></span>
          </div>
          <div class="photos-list">
            <ul>
              <li v-for="(item, index) in pictures" :key="index">
                <img :src="item" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 票房 -->
      <div class="box-office" v-if="mbox">
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
              <div class="value">{{ mbox.lastDayRank }}</div>
              <div class="name">昨日排名</div>
            </div>
            <div class="item">
              <div class="value">{{ mbox.firstWeekBox | num }}</div>
              <div class="name">首周票房(万)</div>
            </div>
            <div class="item">
              <div class="value">{{ mbox.sumBox | num }}</div>
              <div class="name">累计票房(万)</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 相关快讯 -->
      <div class="informations" v-if="newslist">
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
              <div
                class="content"
                v-for="(item, index) in newslist"
                :key="index"
              >
                <div class="top">
                  <span>{{ item.title }}</span>
                  <img :src="item.previewImages[0].url" alt="" />
                </div>
                <div class="bottom">
                  <div class="left">{{ item.source }}</div>
                  <div class="right">
                    <img src="@/assets/img/read-num.png" alt="观看次数" />
                    <p>{{ item.viewCount }}</p>
                    <img
                      class="comment"
                      src="@/assets/img/replying-comments.png"
                      alt="评论数"
                    />
                    <p>{{ item.commentCount }}</p>
                  </div>
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
          <a>《免责声明》</a>
          <span>I 违法和不良信息举报电话：400601890</span>
        </p>
        <div class="bottom-logo">
          <img alt="" src="@/assets/img/bottom-logo.png" />
        </div>
      </div>
    </div>
    <!-- 购票 -->
    <div class="buyTicket">
      <div class="buybtn">
        <div class="buy" @click="goticket(movieId)">特惠购票</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'; // 添加 axios 导入
import { getMovieDetail } from "@/api/detail";
import Loading from "@/components/Loding.vue";

export default {
  data() {
    return {
      feeds: [], // 初始化 feeds 为一个空数组
      showpage: false,
      movieId: null, // 电影ID值
      isloading: true, //页面加载提示
      isOpen: false, //简介文字展开
      isShow: false, //简介文字收回
      movieDetail: null,
      mrate: null, //评分进度条数据
      movieInfo: null, //电影数据
      actorlist: null, //演员数据
      mbox: null, //票房数据
      newslist: null, //相关资讯
      videos: null, //视频
      pictures: null, //剧照
    };
  },
  methods: {
    getMovieDetailFun() {
      getMovieDetail({
        movieId: this.movieId, //查询电影详情所携带id参数
      }).then((data) => {
        if (data != null) {
          this.showpage = true;
        }
        // 解析接口数据
        this.movieDetail = data;
        this.mbox = data.mbox.mbox; //票房数据
        this.actorlist = data.celebrities; // 演员列
        this.movieInfo = data.movie; //电影信息
        this.mrate = data.distribution; //评分等级数据
        this.pictures = data.movie.photos; //剧照
        this.videos = data.feedVideos.feeds; //视频
        // console.log(this.videos);
        this.newslist = data.newsList.newsList; //相关快讯
      });
    },
    open() {
      // 展开文字
      this.isOpen = true;
    },
    putaway() {
      this.isOpen = false;
    },
    // 跳转购票页
    goticket(id) {
      this.$router.push({ name: "MovieTicket", query: { id: id } });
    },
    fetchFeeds() {
      // 示例 API 调用
      axios.get('/api/feeds')
        .then(response => {
          this.feeds = response.data;
        })
        .catch(error => {
          console.error('Error fetching feeds:', error);
        });
    },
  },
  created() {
    this.movieId = this.$route.query.id; //获取传来的id值
    // console.log("movieId => ", this.movieId);
    if (this.movieId) {
      this.getMovieDetailFun();
    }
    if (!this.movieDetail) {
      // 取消加载层
      this.isloading = false;
    }
  },
  mounted() {
    // 确保在 API 调用后正确赋值 feeds
    this.fetchFeeds();
  },
  components: { Loading },

  // 实现整数三位一分隔
  filters: {
    num: (val) => {
      val = "" + val; // 转换成字符串
      let int = val;
      int = int.split("").reverse().join(""); // 翻转整数
      let temp = ""; // 临时变量
      for (let i = 0; i < int.length; i++) {
        temp += int[i];
        if ((i + 1) % 3 === 0 && i !== int.length - 1) {
          temp += ","; // 每隔三个数字拼接一个逗号
        }
      }
      temp = temp.split("").reverse().join(""); // 加完逗号之后翻转
      return temp; // 返回
    },
  },
};
</script>
  
<style lang="less" scoped>
.main {
  .movie-page {
    background-color: #f4f4f4;
    padding-bottom: 64px;
    .detail-page {
      padding: 21px 16px;
      // background-color: #664d29;
      .navbar {
        display: flex;
        color: #ccc;
        font-size: 14px;
        margin-bottom: 15px;
      }
      .movie-info-top {
        display: flex;
        .topleft {
          float: left;
          position: relative;
          flex-shrink: 0;
          height: 138px;
          width: 100px;
          img {
            height: 138px;
            width: 100px;
            object-fit: cover; //对图片进行剪切并保留原始比例
          }
          .playico {
            height: 30px;
            width: 30px;
            position: absolute;
            bottom: 0;
            left: 0;
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
              font-size: 12px;
              color: #ccc;
            }
            .tag {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              img {
                // 电影标签【2D/3D】
                height: 14px;
                border-radius: 2px;
                margin-left: 4px;
              }
            }
            .star {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 230px;
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
              // background-color: #9b8b74;
              background: hsla(0, 0%, 100%, 0.35);
              justify-content: center;
              align-items: center;
              border-radius: 4px;
            }
            .watched {
              display: flex;
              // flex: 1;
              width: 48%;
              // background-color: #9b8b74;
              background: hsla(0, 0%, 100%, 0.35);
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
        // background-color: #543f22;
        background-color: rgba(0, 0, 0, 0.18);
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
                  // 评分
                  color: #ffb400;
                  font-size: 26px;
                  font-weight: bold;
                }
                .wish {
                  padding: 16px;
                  display: flex;
                  p {
                    // [人想看]
                    // align-self: flex-end;
                    align-self: center;
                    margin-left: 6px;
                    font-size: 12px;
                    font-weight: bold;
                    color: #fff;
                    opacity: 0.8;
                  }
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
                      // 进度样式
                      height: 4px;
                      border-radius: 1px;
                      // background-color: #8f816e;
                      background: hsla(0, 0%, 100%, 0.3);
                      transition: width 1.5s;
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
                  line-clamp: 1; /* Standard property for compatibility */
                  -webkit-line-clamp: 1; /* For WebKit browsers */
                  -webkit-box-orient: vertical; /* Required for WebKit line-clamp */
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
                height: 110px;
                object-fit: cover; //对图片进行剪切并保留原始比例
              }
              p {
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 12px;
                width: 80px;
              }
              span {
                display: block;
                text-align: center;
                opacity: 0.4;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width: 80px;
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
                  height: 93px;
                  width: 140px;
                  object-fit: cover; //对图片进行剪切并保留原始比例
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
        .videos-list::-webkit-scrollbar {
          display: none;
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
              overflow: hidden;
              img {
                width: 140px;
                height: 90px;
                object-fit: cover; //对图片进行剪切并保留原始比例
              }
            }
          }
        }
        .photos-list::-webkit-scrollbar {
          display: none;
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
                  width: 110px;
                  height: 78px;
                  object-fit: cover; //对图片进行剪切并保留原始比例
                }
              }
              .bottom {
                display: flex;
                margin-top: 8px;
                justify-content: space-between;
                font-size: 12px;
                color: #999;
                .right {
                  display: flex;
                  justify-content: flex-end;
                  margin: 0 4px;
                  img {
                    margin-right: 4px;
                    width: 14px;
                    height: 12px;
                  }
                  .comment {
                    margin: 0 5px 0 40px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .buyTicket {
    // 底部购票样式
    background-color: #fff;
    height: 62px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    overflow: hidden;
    margin: 0;
    display: flex;
    justify-content: center;

    .buybtn {
      width: 80%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .buy {
        flex: 1;
        height: 44px;
        background-image: linear-gradient(-90deg, #fb3333, #ff5269);
        box-shadow: 0 3px 9px 0 rgb(251 51 51 / 30%);
        border-radius: 25px;
        font-size: 16px;
        // font-weight: bold;
        color: #fff;
        text-align: center;
        line-height: 44px;
        margin: 0 4px;
      }
    }
  }
}
</style>