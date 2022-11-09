<template>
  <div>
    <!-- 下拉菜单 -->
    <div class="opcity"></div>
    <!-- 筛选区域 -->
    <div class="bigbox">
      <div class="alltag">
        <div class="city">
          全城
          <span class="iconfont icon-xiajiantou"></span>
        </div>
        <div class="brand">
          品牌
          <span class="iconfont icon-xiajiantou"></span>
        </div>
        <div class="feature">
          特色
          <span class="iconfont icon-xiajiantou"></span>
        </div>
      </div>
      <div class="t1">
        <van-tabs v-model="active">
          <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
          />
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
// 导入iconfont样式
import "../assets/font/iconfont.js";
export default {};
</script>
<style lang="less" scoped>
.opcity {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: none;
}
.bigbox {
  position: absolute;
  width: 100%;
  top: 156px;
  background: #fff;
  z-index: 10;
  .alltag {
    display: flex;
    margin: 0 18px;
    border-bottom: 1px solid #fff;
    color: #777777;
    align-items: center;
    height: 40px;
    font-size: 14px;
  }
  .city,
  .brand {
    border-right: 1px solid #f5f5f5;
  }
  .city,
  .brand,
  .feature {
    text-align: center;
    flex: 1;
  }
}
</style>