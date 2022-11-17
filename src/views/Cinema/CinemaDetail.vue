<template>
  <!-- 影院详情 -->
  <div>
    <h2>影院详情</h2>
  </div>
</template>

<script>
import { getCinemaDetail, getCinemaShow } from "@/api/cinema.js";

export default {
  props: ["cityip"],
  data() {
    return {
      cinemaId: null, //影院ID
      cinemaDetail: null, //影院详情
      cinemaShow: null, //正在上映电影列表
    };
  },
  methods: {
    getCinemaDetailFun() {
      // 获取影院详情
      getCinemaDetail({
        cinemaId: this.cinemaId, // 影院ID
      }).then((data) => {
        this.cinemaDetail = data;
        console.log("影院数据 => ", this.cinemaDetail);
      });
    },
    getCinemaShowFun() {
      // 获取正在上映电影列表
      getCinemaShow({
        cinemaId: this.cinemaId, // 影院ID
        ci: this.cityip, //城市ID
        channelId: 4,
      }).then((data) => {
        this.cinemaShow = data;
        console.log("正在上映电影 => ", this.cinemaShow);
      });
    },
  },
  created() {
    this.cinemaId = this.$route.query.id; //获取影院的id值
    // console.log("CinemaID => ", this.cinemaId);
    if (this.cinemaId) {
      this.getCinemaDetailFun();
      this.getCinemaShowFun();
    }
  },
  watch: {},
};
</script>

<style lang="less" scoped>
</style>