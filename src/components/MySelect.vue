<template>
  <div>
    <!-- 下拉菜单 -->
    <div class="opcity"></div>
    <!-- 筛选区域 -->
    <div class="bigbox">
      <div class="alltag">
        <div :class="['city', type == 1 ? 'con' : '']" @click="typeOne(1)">
          全城
          <span class="iconfont icon-xiajiantou"></span>
        </div>
        <div :class="['brand', type == 2 ? 'con' : '']" @click="typeOne(2)">
          品牌
          <span class="iconfont icon-xiajiantou"></span>
        </div>
        <div class="feature">
          特色
          <span class="iconfont icon-xiajiantou"></span>
        </div>
      </div>

      <!-- 点击高亮遮罩层 -->
      <!--  -->
      <div class="t1" v-show="type == 1">
        <van-tabs v-model="active">
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
            :class="selectNum == index ? 'con' : ''"
            @click="becomearea(index)"
          >
            <div>{{ item.name }}</div>
            <div>{{ item.count }}</div>
          </van-cell>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
// 导入iconfont样式
import "../assets/font/iconfont.js";

import { getCinema } from "@/api/cinema";

export default {
  data() {
    return {
      light: false, // 遮罩层
      type: 0, //选项卡状态

      activeId: 0,
      activeIndex: 0,
      activeId1: 0,
      activeIndex1: 0,
      active: 0,
      list: [],
      selectNum: 0,
      loading: false,
      finished: false,

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
      this.$emit("becomeid", this.list[index].id);
      this.selectNum = index;
      this.light = false;
    },
    // 点击选项卡左右侧
    ck(index) {
      this.$emit("becomedid", this.items[index].id);
      this.light = false;
    },
    cj(index) {
      this.$emit("becomedid", this.index.id);
      console.log(index.id);
      this.light = false;
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
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
      });
    },
  },
  created() {
    this.getCinemaFun();
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
  display: none;
}
.bigbox {
  position: absolute;
  width: 100%;
  top: 156px;
  background: #fff;
  z-index: 10;
  .alltag {
    display: flex;
    margin: 0 18px;
    border-bottom: 1px solid #fff;
    color: #777777;
    align-items: center;
    height: 40px;
    font-size: 14px;
  }
  .city,
  .brand {
    border-right: 1px solid #f5f5f5;
  }
  .city,
  .brand,
  .feature {
    text-align: center;
    flex: 1;
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
}
</style>