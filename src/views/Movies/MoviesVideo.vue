<template>
    <!-- 电影详情视频播放页 -->
  <div class="movies-video">
    <!-- 固定头部（与 Home.vue 顶部横幅样式一致） -->
    <div class="fix-top">
      <div class="top">
        <!-- <span class="back" >‹</span> -->
        <div class="topLeft">
          <img src="@/assets/maoyan_logo.png" @click="$router.back()" />
        </div>
        <div class="topRight">
          <p>发现最新最热电影<span></span></p>
          <h4>打开App<span class="iconfont icon-xiangyou1"></span></h4>
        </div>
      </div>
    </div>

    <main>
      <!-- 视频播放器区域 -->
      <div class="player">
        <video
          ref="videoPlayer"
          :src="videoUrl"
          :poster="poster"
          controls
          playsinline
        ></video>
        <img
          v-if="!isPlaying"
          class="play-overlay"
          src="@/assets/img/play-video.png"
          alt="play"
          @click="play"
        />
      </div>

      <div class="tabs">
        <button
          :class="{ active: activeTab === 'intro' }"
          @click="activeTab = 'intro'"
        >
          简介
        </button>
        <button
          :class="{ active: activeTab === 'comments' }"
          @click="activeTab = 'comments'"
          class="comment-tab"
        >
          评论
          <span class="comment-count">{{ commentsCount }}</span>
        </button>
      </div>

      <section class="content">
        <h1 class="video-title">{{ title }}</h1>
        <div class="meta">{{ date }} · {{ duration }}</div>

        <div v-if="activeTab === 'intro'" class="intro">
          <p>{{ description }}</p>
        </div>
        <div v-else class="comments">
          <p>暂无评论（示例）</p>
        </div>
      </section>

      <div class="action-bar" >
        <button class="action">
          <img src="@/assets/img/read-num.png" alt="like" />
          <span>1171</span>
        </button>
        <button class="action">
          <img src="@/assets/img/replying-comments.png" alt="comment" />
          <span>59</span>
        </button>
        <button class="action">分享</button>
        <button class="want">
          猫眼想看 <strong>{{ wishCount }}</strong>
        </button>
      </div>
    </main>
  </div>
</template>

<script>
// 导入 iconfont (使顶部图标类可用)
import "@/assets/font/iconfont.js";
import "@/assets/font/iconfont.css";
export default {
  name: "MoviesVideo",
  data() {
    // console.log("传入数据 =>>",this.$route.query); //输出调试
    return {
      // 尝试从路由 query 中读取视频信息；在没有时提供默认占位
      videoUrl: this.$route.query.videoUrl || "",
      poster: this.$route.query.poster || "",
      title: this.$route.query.title || "视频推荐",
      description: this.$route.query.desc || "",
      commentsCount: this.$route.query.comments || 0,
      wishCount: this.$route.query.wish || 0,
      date: this.$route.query.date || "",
      duration: this.$route.query.duration || "",
      activeTab: "intro",
      isPlaying: false,
    };
  },
  methods: {
    play() {
      const v = this.$refs.videoPlayer;
      if (!v) return;
      v.play();
      this.isPlaying = true;
    },
    pause() {
      const v = this.$refs.videoPlayer;
      if (!v) return;
      v.pause();
      this.isPlaying = false;
    },
    togglePlay() {
      const v = this.$refs.videoPlayer;
      if (!v) return;
      if (v.paused) {
        v.play();
        this.isPlaying = true;
      } else {
        v.pause();
        this.isPlaying = false;
      }
    },
  },
  mounted() {
    const v = this.$refs.videoPlayer;
    if (v) {
      v.addEventListener("play", () => (this.isPlaying = true));
      v.addEventListener("pause", () => (this.isPlaying = false));
      v.addEventListener("ended", () => (this.isPlaying = false));
    }
  },
};
</script>

<style lang="less" scoped>
.movies-video {
  .fix-top {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #fff;
    .header {
      display: flex;
      box-sizing: border-box;
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
      .back {
        margin-left: 8px;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }

    .top {
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;

      .topLeft {
        height: 40px;
        img {
          height: 40px;
        }
      }

      .topRight {
        display: flex;
        align-items: center;

        p {
          color: #666666;
          line-height: 55px;
          font-weight: bold;
          font-size: 14px;
          span {
            padding-right: 8px;
            border-right: 1px solid #f3f3f3;
          }
        }
        h4 {
          color: #b37e7e;
          font-weight: bold;
          line-height: 55px;
          font-size: 16px;
          padding-left: 4px;
        }
        span {
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
  }

  main {
    // padding-top: 116px; // leave space for fixed header (header 50 + top 60 + gap)
    .player {
      position: relative;
      width: 100%;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      video {
        width: 100%;
        height: auto;
        max-height: 56vh;
        background: #000;
      }
      .play-overlay {
        position: absolute;
        width: 64px;
        height: 64px;
        cursor: pointer;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    /* 顶部样式（复制自 Home.vue 的 .fix-top 的相关样式） */
    .fix-top {
      position: sticky;
      top: 0;
      z-index: 10;
      background-color: #fff;
      .header {
        display: flex;
        box-sizing: border-box;
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
        .back {
          margin-left: 8px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 20px;
          cursor: pointer;
        }
      }

      .top {
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        justify-content: space-between;
        border-bottom: 1px solid #f1f1f1;

        .topLeft {
          height: 40px;
          img {
            height: 40px;
          }
        }

        .topRight {
          display: flex;
          align-items: center;

          p {
            color: #666666;
            line-height: 55px;
            font-weight: bold;
            font-size: 14px;
            span {
              padding-right: 8px;
              border-right: 1px solid #f3f3f3;
            }
          }
          h4 {
            color: #b37e7e;
            font-weight: bold;
            line-height: 55px;
            font-size: 16px;
            padding-left: 4px;
          }
          span {
            font-size: 12px;
            font-weight: bold;
          }
        }
      }
    }

    .tabs {
      display: flex;
      border-bottom: 1px solid #eee;
      button {
        flex: 1;
        padding: 12px 0;
        background: transparent;
        border: none;
        color: #9fa19f;
        cursor: pointer;
        position: relative;
        &.active {
          color: #333;
          font-weight: 700;
          //   border-bottom: 2px solid #f03d37;
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 20px; // 自定义边框长度
            height: 3px;
            background-color: #f03d37;
          }
        }

        &.comment-tab {
          //评论右上角数字统计
          .comment-count {
            position: absolute;
            top: 4px;
            // right: 20%;
            color: #f03d37;
            font-size: 11px;
            // padding: 0 4px;
            // border-radius: 8px;
            line-height: 16px;
            min-width: 16px;
            text-align: center;
            transform: translateX(50%);
          }
        }
      }
    }

    .content {
      padding: 12px;
      .video-title {
        font-size: 18px;
        // font-weight: 500;
        color: #333;
        margin: 0 0 6px 0;
      }
      .meta {
        color: #999;
        font-size: 12px;
        margin-bottom: 10px;
      }
      .intro,
      .comments {
        font-size: 14px;
        color: #333;
      }
    }

    .action-bar {
      display: none; // 隐藏整个操作栏
      /* 保留原有样式以备后用
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 12px;
      border-top: 1px solid #f1f1f1;
      background: #fff;
      position: sticky;
      bottom: 0;
      margin-top: 12px;
      z-index: 10;
      */
      .action {
        display: flex;
        align-items: center;
        gap: 6px;
        background: transparent;
        border: none;
        cursor: pointer;
        img {
          width: 18px;
          height: 18px;
        }
      }
      .want {
        background: #fff;
        border: 1px solid #f03d37;
        color: #f03d37;
        padding: 6px 10px;
        border-radius: 18px;
        font-weight: 600;
      }
    }
  }
}
</style>
