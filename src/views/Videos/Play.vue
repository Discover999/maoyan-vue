<template>
  <div class="main">
    <div class="myvideo" @click="playornot">
      <div class="myvideoTop" @click="back">&lt;</div>
    </div>
    <div class="videoimg">
      <video :src="this.vurl" ref="svideo"></video>
    </div>
    <div class="bofang" v-show="play" @click="playornot">
      <img src="@/assets/img/video-btn-play.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vurl: "",
      play: null,
    };
  },
  created() {
    // console.log(this.$route);
    // console.log(this.$route.query.url);
    this.vurl = this.$route.query.url;
  },
  mounted() {
    this.$refs.svideo.play();
  },
  methods: {
    back() {
      // 返回上一页
      this.$router.go(-1);
    },
    playornot() {
      // 点击播放暂停
      this.play = !this.play;
      if (this.$refs.svideo.paused) {
        this.$refs.svideo.play();
      } else {
        this.$refs.svideo.pause();
      }
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
  .myvideo {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    left: 0;
    top: 0;
    z-index: 1;
    .myvideoTop {
      position: absolute;
      z-index: 3;
      font-size: 24px;
      font-family: "宋体";
      font-weight: bold;
      left: 0;
      top: 0;
      padding: 10px 10px;
      width: 100%;
      // background: rgba(0, 0, 0, 0.3);
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
      color: #fff;
    }
  }
  .videoimg {
    background: #fff;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    video {
      width: 100%;
    }
  }
  .bofang {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    // background: red;
    img {
      height: 60px;
      width: 60px;
    }
  }
}
</style>