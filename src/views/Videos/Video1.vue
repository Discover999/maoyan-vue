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
        <!-- 带id跳转播放页 -->
        <div @click="toplay(item.id)">
          <p>{{ item.title }}</p>
          <!-- 播放按钮 -->
          <img class="play-btn" src="@/assets/img/video-btn-play.png" alt="" />
        </div>
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
          <!-- ${parseInt(res.data.timeLong % 60)}秒 -->
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
    <!-- 底部导航栏 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import { getVideos1 } from "@/api/video.js";
import TabBar from "@/components/TabBar.vue";

export default {
  props: [],
  data() {
    return {
      VideoList: null,
      id: "", // 视频id
      page: "", // 来源页
    };
  },
  components: {
    TabBar,
  },
  methods: {
    // 跳转视频播放页
    toplay(id) {
      this.$router.push({
        name: "play", // 路由定义的 name
        // params: {  // params 传参刷新会刷掉参数而报错
        //   vid: id,
        // },
        query: { page: "getVideos1", vid: id }, // 使用 query 传参防止刷新出错
      });
    },
    getVideosFun() {
      // 获取视频接口数据
      getVideos1().then((data) => {
        this.VideoList = data.data.feeds;
        // console.log("视频接口1数据 ==>", this.VideoList);
      });
    },
  },
  created() {
    this.getVideosFun();
  },
};
</script>

<style lang="less">
// 继承Video.vue样式
// 减少代码量
</style>