// 视频播放页面
<template>
  <div>
    <div class="vshow" v-if="VideoInfo">
      <div
        class="one"
        :style="{
          'background-image': 'url(' + VideoInfo.video.imgUrl + ')',
        }"
      >
        <video src=""></video>
      </div>
      <div class="video-info">
        <div class="title">{{ VideoInfo.title }}</div>
        <div class="user">{{ VideoInfo.user.nickName }}</div>
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
          // console.log("接口1返回数据 ==>", this.VideoInfo);
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
div {
  width: 100%;
  height: 100%;
  .vshow {
    height: 40%;
    width: 100%;
    .video-info {
      width: 100%;
      height: 30%;
      display: flex;
      position: absolute;
      bottom: 0;
      background-color: #fff;
      display: flex;
      flex: 1;
      justify-content: space-between;

      .user-info {
        margin: 0 16px;
        display: flex;
        align-items: center;
        font-size: 12px;
        bottom: 10px;
        img {
          width: 22px;
          height: 22px;
          opacity: 0.9;
          border: 1px rgba(246, 234, 197);
          border-radius: 50%;
          display: block;
        }
        .username {
          margin: 0 6px;
          flex: 1;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #666;
          font-size: 14px;
        }
      }
    }
  }
}
</style>