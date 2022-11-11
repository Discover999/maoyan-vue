<!-- 主页影院 -->
<template>
  <div class="main">
    <MySelect
      :cityip="cityip"
      :halltype="halltype"
      :brandid="brandid"
      :serviceid="serviceid"
    >
    </MySelect>
    <div :v-if="cinemaList">
      <div class="cinema" v-for="item in cinemaList" :key="item.cinemaId">
        <h3>
          <h3>{{ item.title }}</h3>
          <span>{{ item.price.n }}</span>
          <div>{{ item.price.q }}</div>
        </h3>
        <p>{{ item.location }}</p>
        <div class="tag">
          <div v-if="item.services[0]">改签</div>
          <div class="bor" v-if="item.services[1]">折扣卡</div>
          <div v-if="item.services[2]">杜比全景声厅</div>
          <div v-if="item.services[3]">LUXE</div>
        </div>

        <div class="tag2" v-if="item.discount[0]">
          <img src="@/assets/img/card.png" alt="" />
        </div>
      </div>
    </div>

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
  data() {
    return {
      cinemaList: null,
      districid: null, //行政区id
      halltype: null, // 影厅类型
      brandid: null, //品牌
      serviceid: null, //影院服务
    };
  },
  props: ["cityip"],
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
    getCinemasFun() {
      getmoreCinemas({
        cityid: this.cityip,
        districid: this.districid,
        hallType: this.halltype,
        brandId: this.brandid,
        serviceId: this.serviceid,
      }).then((data) => {
        this.cinemaList = data;
        console.log(this.cinemaList);
      });
    },
  },
  created() {
    this.getCinemasFun();
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
  .cinema {
    margin-left: 14px;
    padding: 14px 14px 14px 0;
    border-bottom: 1px solid #f2f2f2;
    h3 {
      display: flex;
      align-items: center;
      span {
        color: #f03d37;
        font-size: 18px;
      }
      div {
        color: #f03d37;
        font-size: 14px;
      }
      h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 240px;
      }
    }
    p {
      font-size: 14px;
      height: 16px;
      color: #666666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 4px;
    }
    .tag {
      display: flex;
      margin-top: 8px;
      div {
        padding: 0 2px;
        font-size: 12px;
        border: 1px solid #a8ccd5;
        border-radius: 6px;
        margin-right: 4px;
        color: red;
      }
      .bor {
        border-color: #ffca7b;
      }
    }
    .tag2 {
      display: flex;
      color: red;
      font-size: 12px;
      align-items: center;
      margin-top: 8px;
      img {
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>