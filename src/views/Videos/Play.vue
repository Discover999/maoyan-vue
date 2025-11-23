<template>
  <div class="video-player">
    <!-- 主内容区 -->
    <div class="player-container" @click="playornot">
      <!-- 顶部导航栏 -->
      <div class="nav-bar" @click.stop="back">
        <van-icon name="arrow-left" class="back-btn" @click.stop="back" />
      </div>

      <!-- 视频播放器 -->
      <video
        ref="svideo"
        class="video-element"
        preload="auto"
        :src="vurl"
        loop
        x5-playsinline
        playsinline
        webkit-playsinline
      />

      <!-- 底部信息栏 -->
      <div class="info-bar">
        <h3 class="video-title">{{ videoTitle }}</h3>
      </div>
    </div>

    <!-- 播放按钮 -->
    <div class="play-btn" v-show="!isPlaying" @click="playornot">
      <img src="@/assets/img/video-btn-play.png" alt="" />
    </div>

    <!-- 侧边操作栏 -->
    <div class="action-bar">
      <!-- 用户信息 -->
      <div class="action-item">
        <img :src="userAvatar" class="avatar" alt="" />
        <span class="username">{{ userName }}</span>
      </div>

      <!-- 互动按钮组 -->
      <div class="interaction-group">
        <div class="action-item">
          <div class="icon-wrapper">
            <img src="@/assets/img/s-up.png" alt="" />
          </div>
          <span class="count">{{ likeCount > 0 ? likeCount : '点赞' }}</span>
        </div>
        <div class="action-item">
          <div class="icon-wrapper">
            <img src="@/assets/img/s-commet.png" alt="" />
          </div>
          <span class="count">{{ commentCount > 0 ? commentCount : '评论' }}</span>
        </div>
        <div class="action-item">
          <div class="icon-wrapper">
            <img src="@/assets/img/s-share.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlay',
  data() {
    return {
      // 视频信息
      videoInfo: {
        url: '',
        title: '',
        upCount: 0,
        commentCount: 0,
        user: {
          name: '',
          avatar: ''
        }
      },
      // 播放状态
      isPlaying: false
    };
  },
  computed: {
    // 视频数据的计算属性
    vurl() { return this.videoInfo.url },
    videoTitle() { return this.videoInfo.title },
    likeCount() { return this.videoInfo.upCount },
    commentCount() { return this.videoInfo.commentCount },
    userName() { return this.videoInfo.user.name },
    userAvatar() { return this.videoInfo.user.avatar }
  },
  created() {
    this.initVideoInfo();
  },
  mounted() {
    this.initVideoPlayer();
  },
  methods: {
    // 初始化视频信息
    initVideoInfo() {
      const { url, title, userName, userAvatar, upCount, commentCount } = this.$route.query;
      this.videoInfo = {
        url: url || '',
        title: title || '无标题',
        upCount: Number(upCount) || 0,
        commentCount: Number(commentCount) || 0,
        user: {
          name: userName || '',
          avatar: userAvatar || ''
        }
      };
    },
    // 初始化视频播放器
    initVideoPlayer() {
      if (this.$refs.svideo) {
        this.$refs.svideo.pause();
        // 设置视频初始音量
        this.$refs.svideo.volume = 0.5;
      }
    },
    // 返回上一页
    back() {
      this.$router.go(-1);
    },
    // 播放/暂停切换
    playornot() {
      const video = this.$refs.svideo;
      if (!video) return;
      
      if (video.paused) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.video-player {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;

  .player-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .nav-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    z-index: 3;
    background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);

    .back-btn {
      color: #fff;
      font-size: 28px;
      // font-weight: bold;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .video-element {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &::-webkit-media-controls {
      display: none !important;
    }
  }

  .info-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 20px 16px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
    z-index: 2;

    .video-title {
      color: #fff;
      font-size: 21px;
      line-height: 1.4;
      margin: 0;
      padding-right: 100px;
      font-weight: normal;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }

  .play-btn {
    position: absolute;
    width: 54px;
    height: 54px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .action-bar {
    position: absolute;
    right: 16px;
    bottom: 100px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .action-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;

      .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.2);
        transition: transform 0.2s ease;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.4);
        }
      }

      .username {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.9);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }
    }

    .interaction-group {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .action-item {
        cursor: pointer;

        .icon-wrapper {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          transition: all 0.2s ease;
          
          &:hover {
            transform: scale(1.1);
            background: rgba(0, 0, 0, 0.5);
          }

          img {
            width: 24px;
            height: 24px;
            display: block;
          }
        }

        .count {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          margin-top: 4px;
        }
      }
    }
  }
}
</style>