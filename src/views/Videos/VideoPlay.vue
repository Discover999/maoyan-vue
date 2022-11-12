// 视频播放页面
<template>
  <div class="main">
    <div class="videopage">
      <div class="vshow" v-if="VideoInfo">
        <div class="video">
          <video
            class="video-play"
            preload="auto"
            :src="VideoInfo.video.url"
            :poster="VideoInfo.video.imgUrl"
            loop=""
            controls=""
            x5-playsinline="true"
            playsinline="true"
            webkit-playsinline="true"
          />
          <div class="topImg">
            <img alt="loading" :src="VideoInfo.video.imgUrl" />
            <div class="pauseIcon"></div>
          </div>
        </div>
        <div class="video-info">
          <div class="title">{{ VideoInfo.title }}</div>
          <div class="user-info">
            <img class="userImg" alt="" :src="VideoInfo.user.avatarurl" />
            <div class="userName">{{ VideoInfo.user.nickName }}</div>
            <img
              class="icon"
              src="//p0.meituan.net/moviemachine/5aaa710d72c78d6553be83f43bc9e4f3946.png"
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
          console.log("接口1返回数据 ==>", this.VideoInfo);
        });
      } else if (this.page == 2) {
        getVideos2().then((data) => {
          this.VideoInfo = data.data.feeds[this.index];
          // console.log("接口2返回数据 ==>", this.VideoInfo);
        });
      } else if (this.page == 3) {
        getVideos3().then((data) => {
          this.VideoInfo = data.data.feeds;
          // console.log("接口3返回数据 ==>", this.VideoInfo);
        });
      } else if (this.page == 4) {
        getVideos4().then((data) => {
          this.VideoInfo = data.data.feeds;
          // console.log("接口4返回数据 ==>", this.VideoInfo);
        });
      } else if (this.page == 5) {
        getVideos5().then((data) => {
          this.VideoInfo = data.data.feeds;
          // console.log("接口5返回数据 ==>", this.VideoInfo);
        });
      } else {
        console.log("未匹配页面");
      }
    },
  },
  created() {
    this.id = this.$route.query.vid;
    this.page = this.$route.query.page;
    this.index = this.$route.query.index;
    console.log("数据来源 => ", this.$route.query.page);
    console.log("获取到vid => ", this.$route.query.vid);
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
    .vshow {
      .video {
        video {
          width: 100%;
          position: absolute;
        }
        .topImg {
          img {
            width: 200px;
            height: 300px;
            z-index: 100;
          }
        }
      }
      .video-info {
        width: 100%;
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 14px 16px;
        .user-info {
          display: flex;
          justify-content: left;
          img {
            width: 22px;
            height: 22px;
            opacity: 0.9;
            border: 1px rgba(246, 234, 197);
            border-radius: 50%;
            display: block;
          }
        }
      }
    }
  }
}
</style>