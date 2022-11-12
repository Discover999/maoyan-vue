<template>
  <div class="main">
    <div class="video">
      <video
        ishivideo="true"
        autoplay="false"
        isrotate="true"
        autoHide="true"
        controls="controls"
      >
        <source :src="this.$route.query.videoUrl" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getParams();
  },
  methods: {
    getParams() {
      console.log("视频URL ==> ", this.$route.query.videoUrl);
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  .video {
    width: 100%;
    height: 100vh;
    background: #000;
    display: flex;
    align-items: center; /*垂直方向居中*/
    justify-content: center; /*水平方向居中*/
    video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>