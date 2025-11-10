<!-- 底部导航栏 -->
<template>
  <div>
    <div class="botmbar">
      <div class="botm" @click="selectNav(1)">
        <!-- 选项卡高亮 -->
        <div :class="isSelect === 1 ? 'active' : ''">
          <span class="iconfont icon-dianying"></span>
          <p>电影/影院</p>
        </div>
      </div>
      <div class="botm" @click="selectNav(2)">
        <div :class="isSelect === 2 ? 'active' : ''">
          <span class="iconfont icon-dianshiju"></span>
          <p>视频</p>
        </div>
      </div>
      <div class="botm" @click="selectNav(3)">
        <div :class="isSelect === 3 ? 'active' : ''">
          <span class="iconfont icon-paishipin"></span>
          <p>小视频</p>
        </div>
      </div>
      <div class="botm" @click="selectNav(4)">
        <div :class="isSelect === 4 ? 'active' : ''">
          <span class="iconfont icon-shouye"></span>
          <p>我的</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isSelect moved to computed property to follow current route
    };
  },
  methods: {
    selectNav(title) {
      // 选项卡点击切换
      switch (title) {
        case 1:
          this.$router.push("/");
          break;
        case 2:
          this.$router.push("/videos");
          break;
        case 3:
          this.$router.push("/video");
          break;
        case 4:
          this.$router.push("/mine");
          break;
      }
    },
  },
  computed: {
    isSelect() {
      const path = this.$route && this.$route.path ? this.$route.path : "";
      const name = this.$route && this.$route.name ? this.$route.name : "";
      // 按路径或路由名映射到选项索引
      if (path === "/" || name === "Home") return 1;
      if (path.startsWith("/videos") || name === "Videos") return 2;
      if (path.startsWith("/video") || name === "Video") return 3;
      if (path.startsWith("/mine") || name === "Mine") return 4;
      // 默认回退到电影/影院
      return 1;
    },
  },
};
</script>
  
<style lang="less" scoped>
.botmbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  display: flex;
  border-top: 1px solid #e9e9e9;
  padding-top: 4px;

  .botm {
    flex-shrink: 0;
    flex-grow: 1;
    color: #696997;
    text-align: center;

    .iconfont {
      font-size: 26px;
      //   color: #f03d37;
    }

    p {
      font-size: 12px;
    }
    .active {
      color: #f03d37;
    }
  }
}
</style>