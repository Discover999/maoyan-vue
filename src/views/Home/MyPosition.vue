<template>
  <div class="main1">
    <van-index-bar>
      <van-index-anchor index="热门城市" />
      <div class="citypop" v-if="hotcity">
        <div
          class="item"
          v-for="(item, index) in hotcity"
          :key="index"
          @click="setCity(item, 20)"
        >
          {{ item }}
        </div>
      </div>
    </van-index-bar>
    <van-index-bar v-if="alist">
      <van-index-anchor index="A" />
      <van-cell
        :title="item.nm"
        v-for="item in alist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="B" />
      <van-cell
        :title="item.nm"
        v-for="item in blist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="C" />
      <van-cell
        :title="item.nm"
        v-for="item in clist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="D" />
      <van-cell
        :title="item.nm"
        v-for="item in dlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="E" />
      <van-cell
        :title="item.nm"
        v-for="item in elist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="F" />
      <van-cell
        :title="item.nm"
        v-for="item in flist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="G" />
      <van-cell
        :title="item.nm"
        v-for="item in glist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="H" />
      <van-cell
        :title="item.nm"
        v-for="item in hlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="I" />
      <van-cell
        :title="item.nm"
        v-for="item in ilist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="J" />
      <van-cell
        :title="item.nm"
        v-for="item in jlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="K" />
      <van-cell
        :title="item.nm"
        v-for="item in klist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="L" />
      <van-cell
        :title="item.nm"
        v-for="item in llist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="M" />
      <van-cell
        :title="item.nm"
        v-for="item in mlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="N" />
      <van-cell
        :title="item.nm"
        v-for="item in nlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="O" />
      <van-cell
        :title="item.nm"
        v-for="item in olist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="P" />
      <van-cell
        :title="item.nm"
        v-for="item in plist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="Q" />
      <van-cell
        :title="item.nm"
        v-for="item in qlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="R" />
      <van-cell
        :title="item.nm"
        v-for="item in rlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="S" />
      <van-cell
        :title="item.nm"
        v-for="item in slist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="T" />
      <van-cell
        :title="item.nm"
        v-for="item in tlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="U" />
      <van-cell
        :title="item.nm"
        v-for="item in ulist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="V" />
      <van-cell
        :title="item.nm"
        v-for="item in vlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="W" />
      <van-cell
        :title="item.nm"
        v-for="item in wlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="X" />
      <van-cell
        :title="item.nm"
        v-for="item in xlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="Y" />
      <van-cell
        :title="item.nm"
        v-for="item in ylist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
      <van-index-anchor index="Z" />
      <van-cell
        :title="item.nm"
        v-for="item in zlist"
        :key="item.id"
        @click="setCity(item.nm, item.id)"
      />
    </van-index-bar>
  </div>
</template>


<script>
import { getCityList } from "@/api/city.js";

export default {
  data() {
    return {
      hotcity: null,
      alist: [],
      blist: [],
      clist: [],
      dlist: [],
      elist: [],
      flist: [],
      glist: [],
      hlist: [],
      ilist: [],
      jlist: [],
      klist: [],
      llist: [],
      mlist: [],
      nlist: [],
      olist: [],
      plist: [],
      qlist: [],
      rlist: [],
      slist: [],
      tlist: [],
      ulist: [],
      vlist: [],
      wlist: [],
      xlist: [],
      ylist: [],
      zlist: [],
    };
  },
  props: ["cityip"],
  methods: {
    getCityListFun() {
      getCityList().then((data) => {
        this.hotcity = data.hot;
        data.cts.findIndex((item) => {
          if (item.py.substr(0, 1) == "a") {
            this.alist.push(item);
          } else if (item.py.substr(0, 1) == "b") {
            this.blist.push(item);
          } else if (item.py.substr(0, 1) == "c") {
            this.clist.push(item);
          } else if (item.py.substr(0, 1) == "d") {
            this.dlist.push(item);
          } else if (item.py.substr(0, 1) == "e") {
            this.elist.push(item);
          } else if (item.py.substr(0, 1) == "f") {
            this.flist.push(item);
          } else if (item.py.substr(0, 1) == "g") {
            this.glist.push(item);
          } else if (item.py.substr(0, 1) == "h") {
            this.hlist.push(item);
          } else if (item.py.substr(0, 1) == "i") {
            this.ilist.push(item);
          } else if (item.py.substr(0, 1) == "j") {
            this.jlist.push(item);
          } else if (item.py.substr(0, 1) == "k") {
            this.klist.push(item);
          } else if (item.py.substr(0, 1) == "l") {
            this.llist.push(item);
          } else if (item.py.substr(0, 1) == "m") {
            this.mlist.push(item);
          } else if (item.py.substr(0, 1) == "n") {
            this.nlist.push(item);
          } else if (item.py.substr(0, 1) == "o") {
            this.olist.push(item);
          } else if (item.py.substr(0, 1) == "p") {
            this.plist.push(item);
          } else if (item.py.substr(0, 1) == "q") {
            this.qlist.push(item);
          } else if (item.py.substr(0, 1) == "r") {
            this.rlist.push(item);
          } else if (item.py.substr(0, 1) == "s") {
            this.slist.push(item);
          } else if (item.py.substr(0, 1) == "t") {
            this.tlist.push(item);
          } else if (item.py.substr(0, 1) == "u") {
            this.ulist.push(item);
          } else if (item.py.substr(0, 1) == "v") {
            this.vlist.push(item);
          } else if (item.py.substr(0, 1) == "w") {
            this.wlist.push(item);
          } else if (item.py.substr(0, 1) == "x") {
            this.xlist.push(item);
          } else if (item.py.substr(0, 1) == "y") {
            this.ylist.push(item);
          } else if (item.py.substr(0, 1) == "z") {
            this.zlist.push(item);
          } else {
          }
        });
        // console.log("热门城市 =>", this.hotcity);
      });
    },
    // 点击城市跳转首页并传值
    setCity(cname, cip) {
      this.$emit("setCity", { cname, cip });
      console.log("点击的城市 => ", cname);
      this.$router.push("/index/one");
    },
  },
  created() {
    this.getCityListFun();
  },
};
</script>
  
<style lang="less" scoped>
.main1 {
  background: #ebebeb;
}
.van-index-anchor {
  background: #ebebeb;
}

.van-cell {
  background: #f5f5f5;
}

.van-cell::after {
  border-bottom: 1px solid #c8c7cc;
}

.citypop {
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px 8px 0;
  background: #f5f5f5;
  .item {
    width: 29%;
    height: 30px;
    text-align: center;
    background: #fff;
    padding: 4px;
    margin: 15px 0 0 14px;
    display: inline-block;
    border: 1px solid #ececec;
    box-sizing: border-box;
    font-size: 14px;
  }
}
</style>