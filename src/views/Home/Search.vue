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
          v-model.lazy="key"
          type="text"
          class="input"
          placeholder="搜电影、搜影院"
        />
        <span class="cancel" @click="toHome">取消</span>
      </div>
    </div>

    <!-- 搜索内容 -->
    <div class="content" v-if="listdata">
      <div class="list">
        <ul>
          <li
            v-for="item in listdata"
            :key="item.id"
            @click="todetail(item.id)"
          >
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
                <span class="span2" v-show="item.score"
                  >{{ item.score }}
                  <p>分</p></span
                >
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
      key: null,
      listdata: null,
    };
  },
  methods: {
    searchMovieFun() {
      searchMovie({
        keyword: this.key,
        ci: this.cityip,
        limit: 10,
      }).then((data) => {
        // console.log("搜索返回数据 => ", data);
        this.listdata = data;
      });
    },
    todetail(id) {
      this.$router.push({ name: "MovieDetail", query: { id: id } });
    },
    // 返回首页
    toHome() {
      this.$router.push("/");
    },
  },
  watch: {
    key() {
      // console.log("搜索框内容改变 => ", this.key);
      if (this.key != "") {
        this.searchMovieFun();
      } else {
        this.listdata = null;
      }
    },
  },
};
</script>


<style lang="less" scoped>
.main {
  height: 100vh;
  background-color: #f5f5f5;
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
        font-size: 16px;
        font-family: "宋体";
        font-weight: bold;
        left: 2%;
        top: 0;
      }
    }
  }
  .searchBox {
    display: flex;
    height: 48px;
    padding: 0px 12px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .searchCon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      .input {
        // 输入框样式
        flex: 1;
        outline: none;
        height: 28px;
        font-size: 13px;
        padding-left: 28px;
        background: url("@/assets/img/search.png") no-repeat 6px 6px;
        background-size: 5%;
        border: 1px solid #ebebeb;
        background-color: #fff;
        border-radius: 5px;
      }
      .cancel {
        padding-left: 10px;
        font-size: 16px;
        color: #f03d37;
      }
    }
  }
  .content {
    background-color: #fff;
    // 列表样式
    .list {
      ul {
        li {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #e6e6e6;
          padding: 12px 15px;
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
                display: flex;
                p {
                  color: #fa0;
                  font-size: 12px;
                }
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