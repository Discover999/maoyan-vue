<template>
  <div class="main">
    <!-- 顶部横幅 -->
    <div class="searchTop">
      <div class="TopTitle">
        <span class="toback" @click="$router.go(-1)">&lt;</span>
        猫眼电影
      </div>
    </div>

    <!-- 搜索框 -->
    <div class="searchBox">
      <div class="searchCon">
        <input
          v-model.lazy="vuell"
          type="text"
          class="input"
          placeholder="搜电影、搜影院"
        />
        <span class="cancel">取消</span>
      </div>
    </div>

    <!-- 搜索内容 -->
    <div class="content" v-if="listdata">
      <div class="list">
        <ul>
          <li v-for="item in listdata" :key="item.id">
            <!-- 列左侧海报图 -->
            <div class="left">
              <div class="image">
                <img :src="item.poster" alt="MoviePoster" />
              </div>
            </div>

            <!-- 列右详情 -->
            <div class="right">
              <div class="title">
                <h2 class="span1">{{ item.name }}</h2>
                <span class="span2">{{ item.score }}</span>
              </div>
              <p class="p1">{{ item.ename }}</p>
              <p class="p2">{{ item.catogary }}</p>
              <p class="p3">{{ item.release }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { searchMovie } from "@/api/search";

export default {
  props: ["cityip"],
  data() {
    return {
      vuell: null,
      listdata: null,
    };
  },
  methods: {
    searchMovieFun() {
      searchMovie({
        keyword: this.vuell,
        ci: this.cityip,
        limit: 10,
      }).then((data) => {
        console.log("搜索返回数据 => ", data);
        this.listdata = data;
      });
    },
  },
  watch: {
    vuell() {
      console.log("搜索框内容改变");
      this.searchMovieFun();
    },
  },
};
</script>


<style lang="less" scoped>
.main {
  .searchTop {
    // 头部横幅
    background: #e54847;
    color: #fff;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    .TopTitle {
      // 【猫眼电影】
      font-size: 18px;
      color: #fff;
      text-align: center;
      position: relative;
      .toback {
        // 返回按钮
        position: absolute;
        top: 0;
        left: 5%;
        font-size: 12px;
        margin-top: 6px;
      }
    }
  }
  .searchBox {
    height: 48px;
    padding: 0px 12px;
    background-color: #f5f5f5;
    .searchCon {
      display: flex;
      justify-content: center;
      align-items: center;
      .input {
        flex: 1;
        outline: none;
        height: 30px;
      }
      .cancel {
        font-size: 12px;
        color: #e54847;
      }
    }
  }
  .content {
    // 列表样式
    .list {
      ul {
        li {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #e6e6e6;
          padding: 12px;
          .image {
            // 海报图
            width: 60px;
            margin-right: 10px;
            img {
              display: block;
              width: 100%;
            }
          }
          .right {
            flex: 1;
            .title {
              display: flex;
              justify-content: space-between;
              .span1 {
                // 剧名
                color: #222;
                font-weight: bold;
              }
              .span2 {
                // 评分
                color: #fa0;
                font-size: 16px;
              }
            }
            p {
              color: #666666;
              font-size: 13px;
              margin-top: 2px;
            }
          }
        }
      }
    }
  }
}
</style>