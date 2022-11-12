<!-- 主页面层 -->
<template>
  <div id="main">
    <!-- 各路由组件 -->
    <router-view :cityip="cityip" :cityname="cityname" @setCity="setCity">
    </router-view>

    <!-- 底部Bar组件 -->
    <!-- <tab-bar></tab-bar> -->
  </div>
</template>

<script>
// import TabBar from "./components/TabBar.vue";

export default {
  data() {
    return {
      cityip: 20,
      cityname: "广州",
    };
  },
  // components: {
  //   TabBar,
  // },
  methods: {
    setCity(obj) {
      let cname = obj.cname;
      let cip = obj.cip;
      this.cityip = cip;
      this.cityname = cname;
      console.log("城市id => ", cip);
    },
  },
};
</script>

<style lang="less">
@import "./assets/css/base.css";
</style>
