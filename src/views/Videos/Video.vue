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
      this.$router.push("/videos/index");
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
</style>