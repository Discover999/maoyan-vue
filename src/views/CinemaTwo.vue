<!-- 主页影院 -->
<template>
  <div>
    <MySelect></MySelect>
  </div>
</template>
  
  <script>
import { getmoreCinemas } from "@/api/cinema.js";
import MySelect from "@/components/MySelect.vue";

export default {
  components: {
    MySelect,
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