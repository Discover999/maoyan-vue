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
        <div 
          @click="govideo"
          :class="{ 'active': moveIndex === 0 }"
          ref="tab0"
        >推荐</div>
        <div 
          @click="govideo2"
          :class="{ 'active': moveIndex === 1 }"
          ref="tab1"
        >热片解读</div>
        <div 
          @click="govideo3"
          :class="{ 'active': moveIndex === 2 }"
          ref="tab2"
        >新片预告</div>
        <span :style="{ left: indicatorLeft + 'px', width: indicatorWidth + 'px' }"></span>
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
      moveIndex: 0, // 当前选中的选项索引
      indicatorLeft: 6, // 红色指示器的左偏移
      indicatorWidth: 20, // 红色指示器的宽度
    };
  },
  methods: {
    // 更新指示器位置
    updateIndicator(index) {
      try {
        const tabRef = this.$refs[`tab${index}`];
        if (!tabRef) return;
        const el = tabRef instanceof Array ? tabRef[0] : tabRef;
        const container = el.parentElement;
        const elRect = el.getBoundingClientRect();
        const contRect = container.getBoundingClientRect();
        const elLeft = elRect.left - contRect.left;
        const elWidth = elRect.width;
        // 让指示器居中于文字下方
        const left = elLeft + (elWidth - this.indicatorWidth) / 2;
        this.indicatorLeft = Math.round(left);
      } catch (e) {
        // 忽略错误
      }
    },
    // 推荐
    govideo() {
      this.moveIndex = 0;
      this.$router.push("/videos/recommend");
      this.$nextTick(() => this.updateIndicator(this.moveIndex));
    },
    // 热片解读
    govideo2() {
      this.moveIndex = 1;
      this.$router.push("/videos/hot");
      this.$nextTick(() => this.updateIndicator(this.moveIndex));
    },
    // 新片预告
    govideo3() {
      this.moveIndex = 2;
      this.$router.push("/videos/coming");
      this.$nextTick(() => this.updateIndicator(this.moveIndex));
    },
    // 其他导航方法已删除
  },
  mounted() {
    // 根据当前路由初始化选中项
    const path = this.$route.path;
    if (path.includes('/videos/recommend')) this.moveIndex = 0;
    else if (path.includes('/videos/hot')) this.moveIndex = 1;
    else if (path.includes('/videos/coming')) this.moveIndex = 2;

    this.$nextTick(() => this.updateIndicator(this.moveIndex));

    // 监听窗口大小变化，重新计算指示器位置
    this._onResize = () => this.$nextTick(() => this.updateIndicator(this.moveIndex));
    window.addEventListener('resize', this._onResize);
  },
  beforeDestroy() {
    if (this._onResize) window.removeEventListener('resize', this._onResize);
  },
  watch: {
    // 监听路由变化，更新选中项
    '$route'(to) {
      const path = to.path;
      if (path.includes('/videos/recommend')) this.moveIndex = 0;
      else if (path.includes('/videos/hot')) this.moveIndex = 1;
      else if (path.includes('/videos/coming')) this.moveIndex = 2;
      this.$nextTick(() => this.updateIndicator(this.moveIndex));
    }
  }
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
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;

  .select1 {
    display: flex;
    color: #666;
    flex: 1;
    justify-content: flex-start;
    gap: 18px;
    font-size: 15px;
    position: relative;
    margin-left: 3px;

    div {
      position: relative;
      padding: 0 5px;
      transition: all 0.3s;
      cursor: pointer;
      
      &.active {
        color: #333;
        font-size: 16px;
        font-weight: bold;
      }
    }

    span {
      position: absolute;
      background: #f03d37;
      height: 3.2px;
      bottom: -7px;
      left: 0;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
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
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
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
      // 右侧信息容器
      .video-info-right {
        display: flex;
        align-items: center;
        margin-right: 15px;

        // 点赞数
        .video-praise {
          display: flex;
          margin-right: 15px;
          align-items: center;
          color: #000;
          font-size: 12px;
          img {
            width: 18px;
            height: 18px;
            padding: 0 5px;
          }
        }

        // 评论数
        .video-comment {
          display: flex;
          margin-right: 15px;
          align-items: center;
          color: #333;
          font-size: 12px;
          img {
            width: 18px;
            height: 18px;
            padding: 0 5px;
          }
        }

        // 分享图标
        .video-share {
          display: flex;
          align-items: center;
          margin-left: 5px;
          img {
            width: 18px;
            height: 18px;
            padding: 0 5px;
          }
        }
      }
    }
  }
}
</style>