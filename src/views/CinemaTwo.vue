<!-- 主页影院 -->
<template>
  <div>
    <MySelect></MySelect>
    <!-- 底部导航栏 -->
    <tab-bar></tab-bar>
  </div>
</template>
  
  <script>
import { getmoreCinemas } from "@/api/cinema.js";
import MySelect from "@/components/MySelect.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  components: {
    MySelect,
    TabBar,
  },
  methods: {
    getCinemasFun() {
      getmoreCinemas().then((data) => {});
    },
  },
};
</script>
  
<style lang="less" scoped>
</style>