<template>
  <!-- 影院信息页 -->
  <div class="main" v-if="cinemaInfo">
    <div class="cinemaTop">
      <!-- 头部logo -->
      <span class="backto" @click="$router.go(-1)">&lt;</span>
      <!-- <header>猫眼电影</header> -->
      <header>{{ cinemaInfo.nm }}</header>
      <div class="headerRight">
        <span class="iconfont icon-liebiao2"> </span>
      </div>
    </div>
    <div class="base">
      <h2>{{ cinemaInfo.nm }}</h2>
      <div
        class="address"
        @click="
          tomap(cinemaInfo.lat, cinemaInfo.lng, cinemaInfo.nm, cinemaInfo.addr)
        "
      >
        <span class="local" />{{ cinemaInfo.addr }}
      </div>
      <div class="phone" @click="tocall(cinemaInfo.tel)">
        <span class="ph" />
        {{ cinemaInfo.tel }}
      </div>
    </div>
    <div class="feature">
      <!-- 特色服务 -->
      <h3>特色服务</h3>
      <div class="list" v-for="(item, index) in featureList" :key="index">
        <div class="item">
          <span
            class="tag"
            :style="
              'color:' + item.color + ';border: 1px solid ' + item.color + ';'
            "
          >
            {{ item.tag }}</span
          >
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
    <div class="notice" v-if="notice">
      <!-- 公告 -->
      <h3>影院公告</h3>
      <div class="content">
        <div>{{ notice }}</div>
        <!-- <p>1、疫情期间影城不提供公用3D眼镜，3D影片需自备3D眼镜；</p>
        <p>2、开场后系统不支持退票，请谨慎选择场次，感谢您的理解；</p>
        <p>3、影城谢绝外带食品。</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getCinemaDetail } from "@/api/cinema.js";

export default {
  data() {
    return {
      cinemaId: null, //影院ID
      cinemaInfo: null, //影院信息
      featureList: null, //影院提供的服务
      notice: null, //公告
    };
  },
  methods: {
    getCinemaInfoFun() {
      // 获取影院详情
      getCinemaDetail({
        cinemaId: this.cinemaId, // 影院ID
      }).then((data) => {
        this.cinemaInfo = data.data;
        this.featureList = this.cinemaInfo.featureTags; //获取服务
        this.notice = this.cinemaInfo.notice; //获取公告
        // console.log("影院数据 => ", this.cinemaInfo);
        // console.log("影院服务 => ", this.featureList);
        // console.log("公告 => ", this.notice);
      });
    },
    tocall(phone) {
      // 打电话
      window.location.href = "tel:" + phone;
    },
    tomap(lat, lng, nm, addr) {
      // 查看影院位置
      window.location.href =
        "https://apis.map.qq.com/uri/v1/marker?marker=coord:" +
        lat +
        "," +
        lng +
        ";title:" +
        nm +
        ";addr:" +
        addr +
        "&referer=wepiao";
    },
  },
  created() {
    this.cinemaId = this.$route.query.cid; //获取传来的id值
    // console.log(this.cinemaId);
    if (this.cinemaId) {
      // 有id值才进行查询
      this.getCinemaInfoFun();
    }
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100vh;
  background: #f5f5f9;
  overflow: hidden;
  //   white-space: nowrap;
  text-overflow: ellipsis;
  .cinemaTop {
    // 头部样式
    display: flex;
    justify-content: space-between;
    background-color: #e54847;
    color: #fff;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    .backto {
      font-size: 16px;
      font-weight: bold;
      font-family: "宋体";
      margin: 0 15px;
    }
    header {
      margin: 0 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .headerRight {
      margin-left: 10px;
      span {
        margin: 0 10px;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .base {
    color: #333;
    background: #fff;
    h2 {
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 0;
      line-height: 1.5;
      padding: 10px 0 10px 15px;
      border-bottom: 1px solid #f0f0f0;
    }
    .address {
      font-size: 14px;
      position: relative;
      line-height: 1.5;
      padding: 10px 28px 10px 40px;
      white-space: pre-wrap;
      border-bottom: 1px solid #f0f0f0;
      .local {
        content: "";
        top: 50%;
        left: 13px;
        position: absolute;
        width: 12px;
        height: 16px;
        margin-top: -8px;
        background: url(@/assets/img/addr.png) no-repeat 50%;
        background-size: contain;
      }
    }
    .phone {
      font-size: 15px;
      //   font-weight: 400;
      font-family: sans-serif;
      height: 40px;
      position: relative;
      line-height: 40px;
      padding-left: 40px;
      border-bottom: 1px solid #f0f0f0;
      //   display: inline-block;
      margin-right: 1px;
      text-decoration: none;
      color: #3b9fe6;
      .ph {
        content: "";
        top: 50%;
        left: 13px;
        position: absolute;
        width: 13px;
        height: 13px;
        margin-top: -8px;
        background: url(@/assets/img/tel.png) no-repeat 50%;
        background-size: contain;
      }
    }
  }
  .feature {
    margin-top: 10px;
    padding: 0 10px;
    color: #777;
    background: #fff;
    h3 {
      // 特色服务
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      padding: 11px 0;
      color: #666;
      border-bottom: 1px solid #f0f0f0;
    }
    .list {
      .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        // text-align: center;
        font-size: 14px;
        padding: 9px 15px 9px 0;
        text-decoration: none;
        border-bottom: 1px solid #f0f0f0;
        .tag {
          white-space: nowrap;
          float: left;
          margin-top: 2px;
          margin-right: 10px;
          line-height: 16px;
          padding: 0 3px;
          border-radius: 3px;
          font-size: 12px;
        }
      }
    }
  }
  .notice {
    margin-top: 10px;
    padding: 0 15px 20px;
    color: #333;
    background: #fff;
    white-space: pre-wrap;
    h3 {
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      padding: 11px 0;
      color: #666;
    }
    .content {
      min-height: 22px;
      line-height: 20px;
      font-size: 14px;
      color: #777;
    }
  }
}
</style>