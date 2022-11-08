<template>
  <div class="main">
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
<style lang="less">
.main {
  video {
    width: 100%;
    height: 100%;
  }
}
</style>