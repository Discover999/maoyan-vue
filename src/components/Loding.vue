<!-- 加载效果页 -->
<template>
  <div class="main">
    <div class="loading">
      <van-loading size="24px" color="#888"><p>加载中...</p></van-loading>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
    
<style lang="less" scoped>
* {
  /* CSS Reset */
  margin: 0;
  padding: 0;
}
.main {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   width: 100%;
  //   height: 100vh;

  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  align-items: center;
  text-align: center;
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    p{
        margin-left: 4px;
    }
  }
}
</style>