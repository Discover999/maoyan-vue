<template>
  <div class="main">
    <div class="header">
      <!-- 头部logo -->
      <span></span>
      <header>猫眼电影</header>
      <div class="headerRight">
        <span class="iconfont icon-liebiao2"> </span>
      </div>
    </div>

    <!-- 顶部横幅 -->
    <div class="top">
      <div class="topLeft">
        <img src="../assets/maoyan_logo.png" />
      </div>
      <div class="topRight">
        <p>发现最新最热电影<span></span></p>
        <h4>打开App<span class="iconfont icon-xiangyou1"></span></h4>
      </div>
    </div>

    <!-- 顶部选项卡 -->
    <div class="current">
      <div class="city" @click="gocity">
        <!-- <router-link class="city" tag="div" to="/position"></router-link> -->
        <span>{{ cityname }}</span>
        <span class="iconfont icon-xiajiantou"></span>
      </div>

      <div class="cinema">
        <div
          @click="gochange1"
          :class="{ 'router-link-active': moveIndex == 0 }"
        >
          热映
        </div>
        <div
          @click="gochange2"
          :class="{ 'router-link-active': moveIndex == 1 }"
        >
          影院
        </div>
        <div
          @click="gochange3"
          :class="{ 'router-link-active': moveIndex == 2 }"
        >
          待映
        </div>
        <div
          @click="gochange4"
          :class="{ 'router-link-active': moveIndex == 3 }"
        >
          经典电影
        </div>

        <span :style="{ left: 56 * moveIndex + 5 + 'px' }"></span>
      </div>
      <!-- 搜索 -->
      <span
        class="search iconfont icon-fangdajing"
        @click="$router.push('/search')"
      ></span>
    </div>

    <!-- 路由显示 -->
    <div>
      <router-view :cityip="cityip"></router-view>
    </div>
  </div>
</template>

<script>
// 导入iconfont样式
import "../assets/font/iconfont.js";

export default {
  props: ["cityip", "cityname"],
  data() {
    return {
      moveIndex: 0,
      active: 1, // 当前激活的导航索引
    };
  },
  methods: {
    // 热映
    gochange1() {
      (this.moveIndex = 0), this.$router.push("/index/one");
      // console.log(this.$router.push("/index/one"));
    },
    // 影院
    gochange2() {
      (this.moveIndex = 1), this.$router.push("/index/two");
      // console.log(this.$router.push("/index/two"));
    },
    // 待映
    gochange3() {
      (this.moveIndex = 2), this.$router.push("/index/three");
      // console.log(this.$router.push("/index/three"));
    },
    // 经典电影
    gochange4() {
      (this.moveIndex = 3), this.$router.push("/index/four");
      // console.log(this.$router.push("/index/four"));
    },
    // 城市列表
    gocity() {
      this.$router.push("/position");
    },
  },
};
</script>

<style lang="less" scoped>
// 去除四周白边
* {
  margin: 0;
  padding: 0;
}

.main {
  width: 100%;

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
        // border-right: 1px solid #f3f3f3;
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

.current {
  display: flex;
  height: 44px;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;

  .city {
    margin-right: 20px;
    color: #666666;

    .iconfont {
      margin-left: 2px;
      font-size: 12px;
      color: #b0b0b0;
      display: inline-block;
      transform: scale(0.7);
    }
  }
  .cinema {
    display: flex;
    color: #666666;
    flex: 1;
    justify-content: space-between;
    font-size: 15px;
    font-weight: bold;
    position: relative;
    margin-left: 20px;
    // 激活(选中)项样式
    // .active {
    //   font-size: large;
    //   color: #333333;
    //   border-bottom: 3.5px solid #f03d37;
    // }

    span {
      position: absolute;
      background: #f03d37;
      width: 24px;
      height: 3px;
      bottom: -7px;
      left: 4px;
      transition: 0.25s;
    }
  }
  .search {
    color: #ef4339;
    font-size: 22px;
    font-weight: bold;
    margin-left: 36px;
  }
}
</style>
