<template>
  <div>
    <div class="videoTop">
      <!-- 头部logo -->
      <span></span>
      <header>猫眼电影</header>
      <div class="headerRight">
        <span class="iconfont icon-liebiao2"> </span>
      </div>
    </div>

    <!-- 短视频流 -->
    <div class="shortlist">
      <div
        class="smvideo"
        v-for="item in ShortVideoList"
        :key="item.id"
        :style="{ 'background-image': 'url(' + item.images[0].url + ')' }"
        @click="toVideoPlay(item)"
      >
        <p>{{ item.title }}</p>

        <!-- 用户信息 -->
        <div class="userinfo">
          <div class="user">
            <img :src="item.user.avatarurl" alt="" />
            <div class="username">{{ item.user.nickName }}</div>
          </div>
          <div class="videoup">
            <img class="upCount" src="@/assets/img/up.png" alt="" />
            <span>{{ item.upCount }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <tab-bar></tab-bar>
  </div>
</template>
  
<script>
import { getShortVideo } from "@/api/video.js";
import TabBar from "@/components/TabBar.vue";

export default {
  data() {
    return {
      ShortVideoList: null,
    };
  },
  components: {
    TabBar,
  },
  methods: {
    getShortVideoFun() {
      getShortVideo().then((data) => {
        this.ShortVideoList = data.data.feeds;
        // console.log("小视频api ==>", this.ShortVideoList);
      });
    },
    toVideoPlay(item) {
      this.$router.push({
        name: 'VideoPlay',
        query: {
          id: item.video.id,
          url: item.video.url,
          title: item.title,
          userName: item.user.nickName,
          userAvatar: item.user.avatarurl,
          upCount: item.upCount,
          commentCount: item.commentCount || 0
        }
      });
    },
  },
  created() {
    // 生命周期
    this.getShortVideoFun();
  },
};
</script>
  
<style lang="less" scoped>
.videoTop {
  // 头部样式
  display: flex;
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
.shortlist {
  // 短视频列表流样式
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 48px;
  margin-top: -0.4%;

  .smvideo {
    // 短视频div样式
    // background: url();
    display: inline-block;
    width: 49.5%;
    height: 300px;
    margin: 0.5% 0.5% 0 0;
    background-position: 50%;
    background-size: cover;
    position: relative;

    p {
      // 标题样式
      width: 170px;
      margin: 0 8px;
      position: absolute;
      color: #fff;
      bottom: 40px;
      font-size: 16px;
    }
    .userinfo {
      // 用户信息样式
      margin-left: 8px;
      display: flex;
      width: 90%;
      align-items: center;
      // font-size: 12px;
      position: absolute;
      bottom: 10px;
      .user {
        width: 65%;
        display: flex;
        // justify-content: left;
        img {
          width: 22px;
          height: 22px;
          opacity: 0.9;
          border: 1px rgba(246, 234, 197);
          border-radius: 50%;
          display: block;
        }
        .username {
          // 用户名
          margin-left: 6px;
          // display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #fff;
          font-size: 14px;
        }
      }
      .videoup {
        // 点赞样式
        display: flex;
        width: 45%;
        margin-left: 6px;
        // margin-left: 20px;
        .upCount {
          height: 19px;
          width: 19px;
        }
        span {
          // 点赞数
          margin-top: 2px;
          // margin-left: 4px;
          font-size: 14px;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
}
</style>