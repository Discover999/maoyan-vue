<template>
  <div>
    <!-- 下拉菜单 -->
    <div class="opcity" @click="openLight" v-show="light"></div>
    <!-- 筛选区域 -->
    <div class="bigbox">
      <div class="alltag">
        <div :class="['city', type == 1 ? 'con' : '']" @click="typeOne(1)">
          <span v-if="!this.cname">全城</span>
          {{ cname }}
          <span
            :class="['iconfont icon-xiajiantou', type == 1 ? 'toy' : '']"
          ></span>
        </div>
        <div :class="['brand', type == 2 ? 'con' : '']" @click="typeOne(2)">
          <span v-if="!this.bname">品牌</span>
          {{ bname }}
          <span
            :class="['iconfont icon-xiajiantou', type == 2 ? 'toy' : '']"
          ></span>
        </div>
        <div :class="['feature', type == 3 ? 'con' : '']" @click="typeOne(3)">
          特色
          <span
            :class="['iconfont icon-xiajiantou', type == 3 ? 'toy' : '']"
          ></span>
        </div>
      </div>

      <!-- 全城详细 -->
      <div class="t1" v-show="type == 1">
        <van-tabs
          v-model="active"
          title-active-color="#e54847"
          line-width="180"
        >
          <van-tab title="商圈">
            <van-tree-select
              :items="items"
              :active-id.sync="activeId"
              :main-active-index.sync="activeIndex"
              @click-nav="ck"
              @click-item="cj"
            />
          </van-tab>
          <van-tab title="地铁站">
            <van-tree-select
              :items="items1"
              :active-id.sync="activeId1"
              :main-active-index.sync="activeIndex1"
              @click-nav="ck"
              @click-item="cj"
            />
          </van-tab>
        </van-tabs>
      </div>
      <!-- 品牌详细 -->
      <div class="t2" v-show="type == 2">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="(item, index) in list"
            :key="item.id"
            :class="[selectNum == index ? 'con' : '']"
            @click="becomearea(index)"
          >
            <div>{{ item.name }}</div>
            <div>{{ item.count }}</div>
          </van-cell>
        </van-list>
      </div>
      <!-- 特色详细 -->
      <div class="t3" v-show="type == 3">
        <!-- 特色功能 -->
        <div class="top" v-if="area">
          <div class="bot1">特色功能</div>
          <div class="bot2">
            <div
              v-for="(item, index) in area"
              :key="item.id"
              :class="['pat1', index == contype ? 'con' : '']"
              @click="activeCon(index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>

        <!-- 特色厅 -->
        <div class="top" v-if="area">
          <div class="bot1">特色厅</div>
          <div class="bot2">
            <div
              v-for="(item, index) in featureWay"
              :key="item.id"
              :class="['pat1', index == contype1 ? 'con' : '']"
              @click="activeCon1(index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入iconfont样式
import "../assets/font/iconfont.js";

import { getCinema } from "@/api/cinema";

export default {
  props: ["cityip", "districtid", "halltype", "brandid", "serviceid"],
  data() {
    return {
      light: false, // 遮罩层
      type: 0, //选项卡状态
      contype: 0, //点击功能高亮
      contype1: 0,

      activeId: 0,
      activeIndex: 0,
      activeId1: 0,
      activeIndex1: 0,
      active: 0,
      list: [],
      cname: "",
      bname: "",
      selectNum: 0,
      loading: false,
      finished: false,
      area: null,
      featureWay: null,

      // 商圈items
      items: [
        {
          // 导航名称
          text: "所有城市",
          // 导航可选项
          children: [
            {
              // 名称
              text: "温州",
              // 城市标识符
              id: 1,
            },
            {
              text: "广州",
              id: 20,
            },
          ],
        },
      ],

      // 地铁站items
      items1: [
        {
          // 导航名称
          text: "全部",
          // 导航可选项
          children: [
            {
              // 名称
              text: "北京",
              // 城市标识符
              id: 1,
            },
            {
              text: "广州",
              id: 20,
            },
          ],
        },
      ],
    };
  },
  methods: {
    typeOne(index) {
      this.type = index;
      this.light = !this.light;
    },
    // 点击品牌
    becomearea(index) {
      this.$emit("becomebid", this.list[index].id);
      // console.log("品牌 => ", this.list[index].name);
      this.bname = this.list[index].name;
      if (this.list[index].id == -1) {
        this.bname = "";
      }
      this.selectNum = index;
      this.light = false;
    },
    // 点击选项卡左右侧
    ck(index) {
      if (index == 0) {
        this.$emit("becomedid", this.items[index].id);
        this.cname = "";
        this.light = true;
      }
    },
    cj(index) {
      this.$emit("becomedid", index.id);
      // console.log("城市 => ", index.name);
      this.cname = index.name;
      // console.log("区域代码 => ", index.id);
      this.light = false;
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
          // console.log("列长 => ", this.list.length);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    // 特色高亮
    activeCon(index) {
      this.contype = index;
      this.$emit("becomeeid", this.area[index].id);
    },
    activeCon1(index) {
      this.contype1 = index;
      this.$emit("becomehid", this.featureWay[index].id);
      this.light = false;
    },
    openLight() {
      this.light = false;
      this.type = 0;
    },
    getCinemaFun() {
      // 获取商圈
      getCinema({ ci: this.cityip }).then((data) => {
        // console.log(data);
        // 商圈下拉值
        this.items = data.district.subItems;
        // 地铁站
        this.items1 = data.subway.subItems;

        // 数据处理
        // 【商圈左侧数据】
        this.items.forEach((item) => {
          item.text = item.name + "(" + item.count + ")";
          // 【商圈右侧数据】(子数组遍历[name => text])
          item.children = item.subItems;
          item.children.forEach((par) => {
            par.text = par.name + "(" + par.count + ")";
          });
        });

        // 【地铁左侧数据】
        this.items1.forEach((item) => {
          item.text = item.name + "(" + item.count + ")";
          // 【地铁右侧数据】
          item.children = item.subItems;
          item.children.forEach((par) => {
            par.text = par.name + "(" + par.count + ")";
          });
        });

        // 【品牌数据】
        this.list = data.brand.subItems;
        // console.log("【品牌数据】=> ", this.list);

        // 特色
        this.area = data.service.subItems; // 特色功能
        this.featureWay = data.hallType.subItems; // 特色厅
      });
    },
  },
  created() {
    this.getCinemaFun();
  },
  watch: {
    type: function (newnum, oldnum) {
      // console.log("新值 => ", newnum);
      // console.log("旧值 => ", oldnum);
      if (newnum != oldnum && newnum != 0) {
        this.light = true;
      }
    },
    light: function () {
      if (this.light == false) {
        this.type = 0;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.opcity {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  // display: none;
}
.bigbox {
  // 顶部选项卡样式
  position: absolute;
  width: 100%;
  top: 156px;
  background: #fff;
  z-index: 6;
  .alltag {
    display: flex;
    margin: 0 18px;
    border-bottom: 1px solid #f0f0f0;
    color: #777777;
    align-items: center;
    height: 40px;
    font-size: 14px;
  }
  .city,
  .brand {
    // 选项卡分割线
    border-right: 1px solid #e8e8e8;
  }
  .city,
  .brand,
  .feature {
    text-align: center;
    flex: 1;
    .iconfont {
      font-size: 12px;
      display: inline-block;
      transform: scale(0.8);
    }
  }
  .con {
    color: #e54847;
    .toy {
      transform: scale(0.8) rotate(180deg);
    }
  }
  .t2 {
    .van-cell__value {
      display: flex;
      justify-content: space-between;
      div:nth-of-type(2) {
        font-size: 12px;
        color: #333;
        margin-right: 20px;
      }
    }
  }
  .t3 {
    padding: 10px 12px;
    .top {
      .bot1 {
        color: #777777;
        height: 44px;
        line-height: 44px;
      }
      .bot2 {
        display: flex;
        flex-wrap: wrap;
        .con {
          background: #fcf0f0 !important;
          color: #f03d37 !important;
          border: 0.02rem solid #f03d37 !important;
        }
        .pat1 {
          width: 21.3%;
          height: 30px;
          text-align: center;
          line-height: 30px;
          font-size: 12px;
          border-radius: 6px;
          margin-right: 12px;
          border: 1px solid #dddddd;
          margin-top: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #777777;
          padding: 3px 0;
        }
        .pat1:nth-child(4n + 4) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>