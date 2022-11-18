<template>
  <!-- 视频播放页面 -->
  <div class="main">
    <div class="videopage">
      <div class="myvideoTop"><span @click="back">&lt;</span></div>
      <div class="vshow" v-if="VideoInfo">
        <div class="video">
          <video
            ref="Video"
            preload="auto"
            :src="VideoInfo.video.url"
            :poster="VideoInfo.video.imgUrl"
            loop=""
            controls=""
            x5-playsinline="true"
            playsinline="true"
            webkit-playsinline="true"
          />
          <div class="topImg" v-show="show" @click="play">
            <img alt="loading" :src="VideoInfo.video.imgUrl" />
            <div class="playbtn">
              <img src="@/assets/img/play-video.png" alt="" />
            </div>
          </div>
        </div>
        <div class="video-info">
          <div class="title">{{ VideoInfo.title }}</div>
          <div class="user-info">
            <img alt="" :src="VideoInfo.user.avatarurl" />
            <div class="userName">{{ VideoInfo.user.nickName }}</div>
            <img
              v-if="VideoInfo.user.identification"
              class="icon"
              src="@/assets/img/user-star.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getVideos1,
  getVideos2,
  getVideos3,
  getVideos4,
  getVideos5,
} from "@/api/video";

export default {
  data() {
    return {
      VideoInfo: null,
      show: true,
      new: null,
      id: "10086",
      page: "???",
      index: "",
    };
  },
  methods: {
    // 获取视频详情
    getVideoInfoFun() {
      // console.log("当前page => ", this.page);
      if (this.page == 1) {
        getVideos1().then((data) => {
          this.VideoInfo = data.data.feeds[this.index];
          // console.log("索引位置 ==>", this.index);
          // console.log("接口1返回数据 ==>", this.VideoInfo);
        });
      } else if (this.page == 2) {
        getVideos2().then((data) => {
          this.VideoInfo = data.data.feeds[this.index];
          // console.log("接口2返回数据 ==>", this.VideoInfo);
        });
      } else if (this.page == 3) {
        getVideos3().then((data) => {
          this.VideoInfo = data.data.feeds[this.index];
          // console.log("接口3返回数据 ==>", this.VideoInfo);
        });
      } else if (this.page == 4) {
        getVideos4().then((data) => {
          this.VideoInfo = data.data.feeds[this.index];
          // console.log("接口4返回数据 ==>", this.VideoInfo);
        });
      } else if (this.page == 5) {
        getVideos5().then((data) => {
          this.VideoInfo = data.data.feeds[this.index];
          // console.log("接口5返回数据 ==>", this.VideoInfo);
        });
      } else {
        console.log("未匹配页面");
      }
    },
    // 点击播放
    play() {
      this.show = false;
      this.$refs.Video.play();
    },
    back() {
      // 返回上一页
      this.$router.go(-1);
    },
  },
  created() {
    this.id = this.$route.query.vid;
    this.page = this.$route.query.page;
    this.index = this.$route.query.index;
    // console.log("数据来源 => ", this.$route.query.page);
    // console.log("获取到vid => ", this.$route.query.vid);
    this.getVideoInfoFun();
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100vh;
  background: #f4f4f4;
  .videopage {
    .myvideoTop {
      position: absolute;
      z-index: 1;
      font-size: 24px;
      font-family: "宋体";
      font-weight: bold;
      left: 0;
      top: 0;
      padding: 10px 10px;
      width: 100%;
      // background: rgba(0, 0, 0, 0.3);
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
      color: #fff;
    }
    .vshow {
      .video {
        video {
          width: 100%;
          // position: absolute;
        }
        .topImg {
          // 视频顶层遮罩
          display: flex;
          align-items: center;
          z-index: 2;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          img {
            width: 100%;
          }
          .playbtn {
            display: flex;
            align-items: center;
            z-index: 3;
            position: absolute;
            top: 45%;
            left: 45%;
            img {
              width: 44px;
              height: 44px;
            }
          }
        }
      }
      .video-info {
        // 视频详情
        background: #fff;
        display: flex;
        position: relative;
        flex-direction: column;
        padding: 14px 16px;
        z-index: 4;
        .title {
          // 标题样式
          color: #333;
          line-height: 24px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .user-info {
          // 用户信息样式
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: #333;
          margin-top: 6px;
          img {
            width: 22px;
            height: 22px;
            opacity: 0.9;
            border-radius: 50%;
            display: block;
          }
          .userName {
            margin: 0 6px;
            font-size: 13px;
          }
          .icon {
            height: 14px;
            width: 14px;
            display: flex;
            align-items: center;
            justify-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>