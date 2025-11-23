<template>
  <div class="order-list-page">
    <header class="top-bar">
      <van-icon name="arrow-left" class="back" @click="back" />
      <h2>订单列表</h2>
    </header>

    <!-- 顶部栏目 -->
    <nav class="top-tabs">
      <ul>
        <li
          v-for="(t, idx) in topTabs"
          :key="t"
          :class="{ active: idx === activeTop }"
        >
          <span @click="selectTop(idx)">{{ t }}</span>
        </li>
      </ul>
      <span class="indicator" :style="indicatorStyle"></span>
    </nav>

    <!-- 二级筛选（仅电影周边显示） -->
    <div class="sub-tabs" v-if="showSubTabs">
      <ul>
        <li
          v-for="(s, i) in subTabs"
          :key="s"
          :class="{ active: i === activeSub }"
          @click="activeSub = i"
        >
          {{ s }}
        </li>
      </ul>
    </div>

    <!-- 空状态 -->
    <div class="empty">
      <img src="@/assets/img/order-empty.png" alt="empty" />
      <p>暂无订单</p>
    </div>

    <!-- 底部 tab-bar 复用组件 -->
    <tab-bar />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
export default {
  name: "OrderList",
  components: { TabBar },
  data() {
    return {
      topTabs: ["电影周边", "演出影展周边", "星宇宙商城", "数字藏品"],
      activeTop: 0,
      subTabs: ["全部", "待支付", "待发货", "待收货", "退款/售后"],
      activeSub: 0,
      indicatorLeft: 0,
      // 与 Home.vue 中一致，指示器宽度固定为 24px，居中于文字下方
      indicatorWidth: 32,
    };
  },
  computed: {
    indicatorStyle() {
      return {
        left: this.indicatorLeft + "px",
        width: this.indicatorWidth + "px",
      };
    },
    showSubTabs() {
      return this.activeTop === 0;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateIndicator();
      window.addEventListener("resize", this.updateIndicator);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateIndicator);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    selectTop(idx) {
      this.activeTop = idx;
      // 如果不是电影周边，重置二级筛选为默认
      if (idx !== 0) this.activeSub = 0;
      this.$nextTick(this.updateIndicator);
    },
    updateIndicator() {
      const nav = this.$el.querySelector(".top-tabs ul");
      if (!nav) return;
      const items = nav.children;
      if (!items || items.length === 0) return;
      const el = items[this.activeTop];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const parentRect = nav.getBoundingClientRect();
      // 将指示器宽度固定为 indicatorWidth，并水平居中对齐到文字下方（与 Home.vue 相同逻辑）
      const left =
        rect.left - parentRect.left + (rect.width - this.indicatorWidth) / 2;
      this.indicatorLeft = Math.round(left);
    },
  },
};
</script>

<style scoped lang="less">
.order-list-page {
  position: relative;
  min-height: 100vh;
  background: #f7f7f7;

  .top-bar {
    display: flex;
    align-items: center;
    height: 50px;
    background: #fff;
    padding: 0 12px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03);
    .back {
      border: none;
      background: transparent;
      font-size: 22px;
      margin-right: 8px;
    }
    h2 {
      flex: 1;
      text-align: center;
      margin: 0;
    }
  }

  .top-tabs {
    position: relative;
    background: #fff;
    ul {
      display: flex;
      padding: 0 12px;
      margin: 0;
      list-style: none;
      overflow: auto;
      li {
        padding: 12px 8px;
        color: #666;
        white-space: nowrap;
        cursor: pointer;
        &.active {
          font-weight: 700; /* 仅加粗，颜色保持默认，与 Home.vue .cinema 行为一致 */
        }
      }
    }
    .indicator {
      position: absolute;
      height: 3px;
      background: #e54847;
      bottom: 0;
      transition: all 0.18s;
      border-radius: 2px;
    }
  }

  .sub-tabs {
    background: #fff;
    margin-top: 8px;
    padding: 8px 12px;
    ul {
      display: flex;
      gap: 18px;
      padding: 0;
      margin: 0;
      list-style: none;
      color: #888;
      li {
        cursor: pointer;
        font-size: 14px;
        &.active {
          color: #333;
        }
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
  }
}
</style>
