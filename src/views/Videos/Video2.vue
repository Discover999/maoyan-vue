<template>
  <div class="main">
    <!-- 视频流列表 -->
    <div class="videostream">
      <div
        class="videolist"
        v-for="(item, index) in VideoList"
        :key="item.id"
        :style="{ 'background-image': 'url(' + item.images[0].url + ')' }"
      >
        <div @click="toplay(item.id, index)">
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
import { getVideos2 } from "@/api/video.js";
import TabBar from "@/components/TabBar.vue";

export default {
  data() {
    return {
      VideoList: null,
      id: "", // 视频id
      page: "", // 来源页
      index: "",
    };
  },
  components: {
    TabBar,
  },
  methods: {
    // 跳转视频播放页
    toplay(id, index) {
      this.$router.push({
        name: "play", // 路由定义的 name
        query: { page: "2", index: index, vid: id }, // 使用 query 传参防止刷新出错
      });
    },
    getVideosFun() {
      getVideos2().then((data) => {
        this.VideoList = data.data.feeds;
        // console.log("视频接口2数据 ==>", this.VideoList);
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
</style>