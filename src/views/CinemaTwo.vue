<!-- 主页影院 -->
<template>
  <div class="main">
    <!-- 顶部选择栏组件 -->
    <MySelect
      :cityip="cityip"
      :districtid="districtid"
      :halltype="halltype"
      :brandid="brandid"
      :serviceid="serviceid"
      @becomedid="becomedid"
      @becomehid="becomehid"
      @becomeeid="becomeeid"
      @becomebid="becomebid"
    >
    </MySelect>

    <!-- 影院主体内容 -->
    <div :v-if="cinemaList">
      <div
        class="cinema"
        v-for="item in cinemaList"
        :key="item.cinemaId"
        @click="tocinema(item.cinemaId)"
      >
        <!-- 影院详情条目 -->
        <div class="info">
          <h3>{{ item.title }}</h3>
          <span>&nbsp;&nbsp;{{ item.price.n }}</span>
          <div>&nbsp;{{ item.price.q }}</div>
        </div>
        <!-- 地址及距离 -->
        <div class="local">
          <p>{{ item.location }}</p>
          <span>{{ item.distance }}</span>
        </div>

        <!-- 影院支持的服务 -->
        <!-- 判断并改变服务卡样式bor -->
        <div class="tag">
          <div
            :class="[
              item.services[0].text == '小吃' ? 'bor' : '',
              item.services[0].text == '折扣卡' ? 'bor' : '',
            ]"
            v-if="item.services[0]"
          >
            {{ item.services[0].text }}
          </div>
          <div
            :class="[
              item.services[1].text == '小吃' ? 'bor' : '',
              item.services[1].text == '折扣卡' ? 'bor' : '',
            ]"
            v-if="item.services[1]"
          >
            {{ item.services[1].text }}
          </div>
          <div
            :class="[
              item.services[2].text == '小吃' ? 'bor' : '',
              item.services[2].text == '折扣卡' ? 'bor' : '',
            ]"
            v-if="item.services[2]"
          >
            {{ item.services[2].text }}
          </div>
          <div
            :class="[
              item.services[3].text == '小吃' ? 'bor' : '',
              item.services[3].text == '折扣卡' ? 'bor' : '',
            ]"
            v-if="item.services[3]"
          >
            {{ item.services[3].text }}
          </div>
          <div
            :class="[
              item.services[4].text == '小吃' ? 'bor' : '',
              item.services[4].text == '折扣卡' ? 'bor' : '',
            ]"
            v-if="item.services[4]"
          >
            {{ item.services[4].text }}
          </div>
          <div
            :class="[
              item.services[5].text == '小吃' ? 'bor' : '',
              item.services[5].text == '折扣卡' ? 'bor' : '',
            ]"
            v-if="item.services[5]"
          >
            {{ item.services[5].text }}
          </div>
        </div>

        <!-- 详情条目底部开卡特惠 -->
        <div class="tag2" v-if="item.discount[0]">
          <img src="@/assets/img/card.png" alt="折扣卡图标" />
          <!-- <img :src="item.discount[0].card" alt="折扣卡图标" /> -->
          <div>{{ item.discount[0].text }}</div>
        </div>
      </div>
    </div>

    <div class="locatebanner">
      <div class="local">
        <div class="left">
          <span><img src="@/assets/img/locate.png" alt="" /></span>
          <p v-if="!this.local">正在获取定位...</p>
          <p v-if="this.local">{{ local }}</p>
        </div>
        <div class="right" @click="geo">
          <span><img src="@/assets/img/refresh.png" alt="" /></span>
        </div>
      </div>
    </div>
    <!-- 底部导航栏 -->
    <tab-bar></tab-bar>
  </div>
</template>
  
<script>
import { getmoreCinemas } from "@/api/cinema.js";
import { getPosition } from "@/api/city";
import MySelect from "@/components/MySelect.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  props: ["cityip"],
  components: {
    MySelect,
    TabBar,
  },
  data() {
    return {
      cinemaList: null,
      districtid: null, //行政区id
      halltype: null, //影厅类型
      brandid: null, //品牌
      serviceid: null, //影院服务
      lat: null, //地理定位纬度
      lng: null, //地理定位经度
      position: null, //位置
      local: "", //地址
    };
  },
  methods: {
    // 改变行政区id
    becomedid(id) {
      this.districid = id;
      this.getCinemasFun();
    },
    // 改变影厅类型id
    becomehid(id) {
      this.halltype = id;
      this.getCinemasFun();
    },
    // 改变品牌id
    becomebid(id) {
      this.brandid = id;
      this.getCinemasFun();
    },
    // 改变影院服务id
    becomeeid(id) {
      this.serviceid = id;
      this.getCinemasFun();
    },
    // 跳转影院详情页
    tocinema(id) {
      this.$router.push({ name: "CinemaDetail", query: { id: id } });
    },
    getCinemasFun() {
      getmoreCinemas({
        // 筛选条件值
        // https://apis.netstart.cn/maoyan/#/?id=附近影院筛选条件
        cityId: this.cityip, //	城市id
        districtId: this.districid, // 行政区id
        hallType: this.halltype, // 影厅类型
        brandId: this.brandid, // 品牌
        serviceId: this.serviceid, // 影院服务
        lat: this.lat,
        lng: this.lng,
      }).then((data) => {
        this.cinemaList = data;
        // console.log("影院数据 => ", this.cinemaList);
      });
    },
    // 获取地址
    geo() {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          // console.log("纬度 => ", res.coords.latitude);
          // console.log("经度 => ", res.coords.longitude);
          this.lat = res.coords.latitude.toString().substr(0, 6);
          this.lng = res.coords.longitude.toString().substr(0, 7);
          console.log("纬度 => ", this.lat);
          console.log("经度 => ", this.lng);

          // 从接口拿回地理位置数据
          getPosition({
            lat: this.lat, //纬度
            lng: this.lng, //经度
          }).then((data) => {
            this.position = data.data;
            // console.log("地理信息 => ", this.position);
            // 获得地址
            this.local =
              this.position.city +
              this.position.district +
              this.position.detail;
            console.log("当前地址 => ", this.local);
          });
        },
        (err) => {
          this.local = "定位失败，请稍后重试";
          console.log("定位失败 => ", err.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    },
  },
  created() {
    this.getCinemasFun();
    this.geo();
  },
  watch: {
    cityid: function () {
      this.getCinemasFun();
    },
  },
};
</script>
  
<style lang="less" scoped>
.main {
  margin-top: 41px;
  padding-bottom: 48px;
  .cinema {
    // 影院条目样式
    margin-left: 14px;
    padding: 14px 14px 14px 0;
    border-bottom: 1px solid #f2f2f2;
    .info {
      // 详细信息样式
      display: flex;
      align-items: center;
      white-space: nowrap;
      span {
        // 价格
        color: #f03d37;
        font-size: 18px;
      }
      div {
        // [起]
        color: #f03d37;
        font-size: 12px;
      }
      h3 {
        // 影院名称
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        // width: 240px;
      }
    }
    .local {
      // 地址及距离
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
      p {
        // 影院地址
        font-size: 14px;
        height: 18px;
        margin-top: 4px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span {
        margin-top: 8px;
        color: #666;
        font-size: 14px;
        height: 18px;
      }
    }
    .tag {
      // 影院服务
      display: flex;
      margin-top: 4px;
      div {
        // 默认样式
        padding: 0 2px;
        font-size: 12px;
        border: 1px solid #589daf;
        border-radius: 2px;
        margin-right: 4px;
        color: #589daf;
      }
      .bor {
        // 【小吃】【折扣卡】高亮样式
        border-color: #f90;
        color: #f90;
      }
    }
    .tag2 {
      // 底部开卡样式
      display: flex;
      color: #999999;
      font-size: 12px;
      align-items: center;
      margin-top: 8px;
      img {
        width: 14px;
        height: 14px;
      }
    }
  }
  .locatebanner {
    position: fixed;
    height: 38px;
    // background: #f1f1f1;
    background: hsla(0, 0, 93.7%, 0.9);
    bottom: 44px;
    font-size: 14px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 90%;
    border-radius: 6px 6px;
    .local {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 10px;
      img {
        height: 14px;
        width: 14px;
      }
      .left {
        display: flex;
        width: 80%;
        span {
          display: flex;
          justify-content: center; //水平
          align-items: center; //垂直
        }
        p {
          font-size: 13px;
          color: #333;
          margin: 0 6px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>