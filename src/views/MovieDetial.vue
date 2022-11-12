<template>
  <div>
    <h2>//TO DO</h2>
    <h2>电影详情</h2>
  </div>
</template>
  
<script>
import { getMovieDetail } from "@/api/detail";

export default {
  data() {
    return {
      movieDetail: null,
      btnType: true,
    };
  },
  methods: {
    getMovieDetailFun() {
      getMovieDetail().then((data) => {
        this.movieDetail = data;
        // console.log(this.movieDetail.movieList);
      });
    },
  },
  created() {
    this.getMovieDetailFun();
  },
};
</script>
  
<style lang="less" scoped>
</style>