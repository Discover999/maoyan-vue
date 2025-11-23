<template>
  <div class="movies-list-page">
    <header class="top-bar">
      <van-icon name="arrow-left" class="back" @click="back" />
      <h2>订单列表</h2>
      <span class="iconfont icon-liebiao2" @click.stop="toggleNav"> </span>
      <!-- 右上角下拉导航 -->
      <div class="nav-list" v-if="showNavList">
        <ul>
          <li v-for="item in navItems" :key="item.label" @click="onNav(item)">{{ item.label }}</li>
        </ul>
      </div>
    </header>

    <div class="empty">
      <img src="@/assets/img/order-empty.png" alt="empty" />
      <p>您最近还没有新订单，赶快去下一单吧</p>
    </div>

    <tab-bar />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
export default {
  name: "MoviesList",
  components: { TabBar },
  data() {
    return {
      showNavList: false,
      navItems: [
        { label: '首页', path: '/' },
        { label: '榜单', path: '/' },
        { label: '热点', path: '/videos/recommend' },
        { label: '商城', path: '/orderlist' }
      ]
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toggleNav() {
      this.showNavList = !this.showNavList
    },
    onNav(item) {
      this.showNavList = false
      if (item && item.path) {
        this.$router.push(item.path).catch(()=>{})
      }
    },
    handleOutsideClick(e) {
      if (!this.$el) return
      if (!this.$el.contains(e.target)) {
        this.showNavList = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }
};
</script>

<style scoped lang="less">
.movies-list-page {
  min-height: 100vh;
  background: #f7f7f7;
  position: relative;
  .top-bar {
    display: flex;
    align-items: center;
    height: 50px;
      .iconfont.icon-liebiao2{
        margin-right: 3px;
        font-size: 20px;
        font-weight: bold;
      }
    background: #e54847;
    padding: 0 12px;
    color: #fff;
    .back {
      color: #fff;
      font-size: 20px;
      margin-right: 8px;
    }
    h2 {
      flex: 1;
      text-align: center;
      margin: 0;
    }
  }
  .nav-list{
    position: absolute;
    top: 50px;
    right: 12px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
    z-index: 50;
    ul{ list-style:none; margin:0; padding:6px 0; min-width:120px;
      li{ padding:10px 16px; cursor:pointer; color:#333; white-space:nowrap; text-align:center;
        border-bottom: 1px solid #f0f0f0;
        &:last-child{ border-bottom: none }
        &:hover{ background:#f5f5f5 }
      }
    }
  }
  .empty {
    text-align: center;
    padding: 80px 0;
    color: #999;
    img {
      width: 120px;
      height: auto;
      display: block;
      margin: 0 auto 12px;
    }
    p {
      margin-top: 6px;
    }
  }
}
</style>
