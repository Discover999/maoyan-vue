<template>
  <div class="myb">
    <!-- 头部 -->
    <div class="mineTop">我的</div>

    <div class="mineHead">
      <div class="shot">
        <!-- 顶部头像 -->
        <img src="@/assets/img/ikun.jpg" alt="" />
      </div>
    </div>

    <div class="mylist">
      <p>我的订单</p>
      <div class="line"></div>
      <div class="list-two">
        <div class="left">
          <!-- 电影部分 -->
          <!-- <img src="@/assets/img/movie.png" alt="" /> -->
          <span>电影</span>
        </div>

        <div class="right">
          <!-- <img src="@/assets/img/movie.png" alt="" /> -->
          <span>商城</span>
        </div>
      </div>
    </div>
    <div class="logout" @click="clear_data">
      <p>注销</p>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  methods: {
    // 注销方法
    // 清空 localStorage 存储实现
    clear_data() {
      Toast({ message: "注销成功", position: "bottom" });
      window.localStorage.removeItem("userId");
      setTimeout(() => {
        window.location.reload(); // 刷新页面
      }, 1500); // 延迟1.5s刷新
    },
  },
};
</script>

<style lang="less">
.myb {
  position: absolute;
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  .mineTop {
    background: #e54847;
    padding: 14px 0;
    font-size: 18px;
    text-align: center;
    color: #fff;
  }
  .mineHead {
    width: 100%;
    height: 150px;
    background-image: url(@/assets/img/bg.png);
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    .shot {
      width: 66px;
      height: 66px;
      border-radius: 50%;
      border: 4px solid #fff;
      img {
        width: 66px;
        height: 66px;
        border-radius: 50%;
        display: inline-block;
      }
    }
  }
  .mylist {
    margin-top: 10px;
    padding: 0 15px;
    background: #fff;
    width: 100%;
    height: 150px;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    p {
      font-size: 14px/1.5;
      text-align: center;
      position: relative;
      margin: 13px 0 0;
      font-size: 15px;
      line-height: 21px;
      height: 21px;
      color: #333;
      z-index: 9;
      display: inline-block;
      width: 80px;
      background-color: #fff;
    }
    .line {
      height: 1px;
      width: 160px;
      position: absolute;
      left: 50%;
      margin-left: -80px;
      top: 23px;
      background: #f0f0f0;
    }
    .list-two {
      // 跟随官网样式
      -webkit-text-size-adjust: 100%;
      user-select: none;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      font: 14px/1.5 Arial, Helvetica, sans-serif;
      text-align: center;
      overflow: hidden;
      width: 100%;
      display: flex;
      justify-content: center;
      .left {
        // 左 》 电影按钮
        -webkit-text-size-adjust: 100%;
        user-select: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        font: 14px/1.5 Arial, Helvetica, sans-serif;
        text-align: center;
        height: 97px;
        background-repeat: no-repeat;
        background-position: top;
        background-size: 42px auto;
        margin-top: 18px;
        width: 50%;
        background-image: url(@/assets/img/movie.png);
        span {
          -webkit-text-size-adjust: 100%;
          user-select: none;
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          font: 14px/1.5 Arial, Helvetica, sans-serif;
          cursor: pointer;
          position: relative;
          top: 53px;
          text-align: center;
          font-size: 15px;
          line-height: 21px;
          height: 21px;
          margin: 0;
          color: #333;
        }
      }
      .right {
        // 右 》 商城按钮
        -webkit-text-size-adjust: 100%;
        user-select: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        font: 14px/1.5 Arial, Helvetica, sans-serif;
        text-align: center;
        height: 97px;
        background-repeat: no-repeat;
        background-position: top;
        background-size: 42px auto;
        margin-top: 18px;
        width: 50%;
        background-image: url(@/assets/img/store.png);
        span {
          -webkit-text-size-adjust: 100%;
          user-select: none;
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          font: 14px/1.5 Arial, Helvetica, sans-serif;
          cursor: pointer;
          position: relative;
          top: 53px;
          text-align: center;
          font-size: 15px;
          line-height: 21px;
          height: 21px;
          margin: 0;
          color: #333;
        }
      }
    }
  }
  .logout {
    -webkit-text-size-adjust: 100%;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    font: 14px/1.5 Arial, Helvetica, sans-serif;
    margin-top: 10px;
    background: #fff;
    position: relative;
    height: 44px;
    line-height: 44px;
    p {
      font-size: 15px;
      margin-left: 15px;
      color: #333;
    }
  }
}
</style>