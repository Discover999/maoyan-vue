// 视频播放页面
<template>
  <div>
    <h3>数据来源 => {{ this.page }}</h3>
    <h3>获取到vid => {{ this.id }}</h3>
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
      id: "10086",
      page: "???",
    };
  },
  methods: {
    // 获取视频详情
    getVideoInfoFun() {
      page().then((data) => {
        this.VideoList = data.data.feeds;
        console.log("接口返回数据 ==>", this.VideoList);
      });
    },
  },
  created() {
    this.id = this.$route.query.vid;
    this.page = this.$route.query.page;
    console.log("数据来源 => ", this.$route.query.page);
    console.log("获取到vid => ", this.$route.query.vid);
    this.getVideoInfoFun();
  },
};
</script>
<style lang="less" scoped>
div {
  text-align: center;
}
</style>