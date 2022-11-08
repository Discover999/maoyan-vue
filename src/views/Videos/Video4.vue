<template>
  <div class="main">
    <!-- 视频流列表 -->
    <div class="videostream">
      <div
        class="videolist"
        v-for="item in VideoList"
        :key="item.id"
        :style="{ 'background-image': 'url(' + item.images[0].url + ')' }"
      >
        <p>{{ item.title }}</p>

        <!-- 播放按钮 -->
        <img class="play-btn" src="@/assets/img/video-btn-play.png" alt="" />

        <!-- 底部信息bar -->
        <div class="info-bar">
          <div class="time">
            <!-- 视频时间长度 -->
            {{ parseInt(item.video.dur / 60) }}:{{
                parseInt(item.video.dur % 60) &lt; 10
                  ? "0" + parseInt(item.video.dur % 60)
                  : parseInt(item.video.dur % 60)
            }}
          </div>
        </div>

        <!-- 用户信息 -->
        <div class="video-info">
          <div class="user-info">
            <img :src="item.user.avatarurl" alt="" />
            <div class="username">{{ item.user.nickName }}</div>
          </div>

          <!-- 底部右侧信息 -->
          <div class="video-praise">
            <img src="@/assets/img/video-praise.png" alt="" />
            {{ item.upCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
import { getVideos4 } from "@/api/video.js";

export default {
  data() {
    return {
      VideoList: null,
    };
  },
  methods: {
    getVideosFun() {
      getVideos4().then((data) => {
        this.VideoList = data.data.feeds;
        // console.log("视频接口数据 ==>", this.VideoList);
      });
    },
  },
  created() {
    this.getVideosFun();
  },
};
</script>
  
<style lang="less">
// 视频流样式
.videostream {
  padding-bottom: 48px;
  .videolist {
    display: inline-block;
    width: 100%;
    height: 260px;
    background-position: 50%;
    background-size: cover;
    position: relative;
    border-bottom: 8px solid #f5f5f5;
    // 视频标题
    p {
      font-family: PingFangSC-Medium, serif;
      margin: 10px 16px 20px;
      color: #fff;
      bottom: 40px;
      font-size: 17px;
    }
    // 播放按钮
    .play-btn {
      height: 60px;
      width: 60px;
      position: absolute;
      left: 44%;
      top: 30%;
    }

    .info-bar {
      display: inline-block;
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 48px;
      line-height: 30px;
      background-image: linear-gradient(
        180deg,
        transparent,
        rgba(0, 0, 0, 0.5)
      );
      .time {
        font-size: 12px;
        color: #fff;
        float: right;
        margin-right: 10px;
      }
    }

    // 视频列底部样式
    .video-info {
      width: 100%;
      height: 48px;
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
      // 右侧信息
      .video-praise {
        display: flex;
        margin-right: 20px;
        align-items: center;
        color: #000;
        font-size: 12px;
        img {
          width: 18px;
          height: 18px;
          padding: 0 5px;
        }
      }
    }
  }
}
</style>