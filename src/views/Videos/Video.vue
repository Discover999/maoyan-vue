<template>
  <div class="main">
    <div class="TopBanner">
      <!-- 头部logo -->
      <span></span>
      <header>猫眼电影</header>
      <div class="headerRight">
        <span class="iconfont icon-liebiao2"> </span>
      </div>
    </div>
    <!-- 顶部选项卡 -->
    <div class="topselect">
      <div class="select1">
        <div @click="govideo">推荐</div>
        <div @click="govideo2">热片解读</div>
        <div @click="govideo3">新片预告</div>
        <div @click="govideo4">速看电影</div>
        <div @click="govideo5">剧集综艺</div>
        <span></span>
      </div>
    </div>

    <!-- 路由显示 -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      VideoList: null,
    };
  },
  methods: {
    // 推荐
    govideo() {
      this.$router.push("/videos/recommend");
    },
    // 热片解读
    govideo2() {
      this.$router.push("/videos/hot");
    },
    // 新片预告
    govideo3() {
      this.$router.push("/videos/coming");
    },
    // 速看电影
    govideo4() {
      this.$router.push("/videos/sukan");
    },
    // 剧集综艺
    govideo5() {
      this.$router.push("/videos/zongyi");
    },
  },
};
</script>
    
<style lang="less">
// 猫眼电影横幅
.TopBanner {
  display: flex;
  justify-content: space-between;
  background-color: #e54847;
  color: #fff;
  height: 50px;
  line-height: 50px;
  font-size: 18px;

  .headerRight {
    span {
      margin-right: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}

// 顶部视频推荐选项
.topselect {
  display: flex;
  height: 48px;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;

  .select1 {
    display: flex;
    color: #333;
    flex: 1;
    justify-content: space-between;
    font-size: 15px;
    position: relative;
    margin-left: 3px;

    span {
      position: absolute;
      background: #f03d37;
      width: 20px;
      height: 3.2px;
      bottom: -7px;
      left: 6px;
    }
  }
}

// video1 - 5子页面样式定义
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