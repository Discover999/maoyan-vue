<!-- 经典电影 -->
<template>
  <div class="main">
    <div class="classic">
      <div
        class="movie"
        v-for="item in classiclist"
        :key="item.movieId"
        @click="
          $router.push({ name: 'MovieDetail', query: { id: item.movieId } })
        "
      >
        <!-- 列左图片 -->
        <div class="img">
          <img :src="item.poster" alt="" />

          <!-- 列左电影详情 -->
          <div class="details">
            <h2>{{ item.movieInfo.title }}</h2>
            <p>{{ item.movieInfo.englishTitle }}</p>
            <p>{{ item.movieInfo.actors }}</p>
            <p>{{ item.movieInfo.showInfo }}</p>
          </div>
        </div>

        <!-- 列右评分 -->
        <div class="score">
          <span>{{ item.score }}</span>
          <div v-if="item.score">分</div>
          <div v-if="!item.score">暂无评分</div>
        </div>
      </div>
    </div>
    <!-- 底部导航栏 -->
    <tab-bar></tab-bar>
  </div>
</template>
  
<script>
import { getClassicList } from "../api/classic.js";
import TabBar from "@/components/TabBar.vue";

export default {
  data() {
    return {
      classiclist: null,
    };
  },
  components: {
    TabBar,
  },
  methods: {
    getClassiclistFun() {
      getClassicList().then((data) => {
        this.classiclist = data;
        // console.log(this.classiclist);
      });
    },
  },
  created() {
    this.getClassiclistFun();
  },
};
</script>
  
<style lang="less">
.main {
  .classic {
    padding-top: 16px;
    margin-bottom: 50px;
    .movie {
      display: flex;
      justify-content: space-between;
      margin-left: 20px;
      margin-bottom: 20px;
      .img {
        display: flex;
        align-items: center;
        img {
          width: 66px;
          height: 94px;
        }
        .details {
          margin-left: 8px;
          h2 {
            font-size: 18px;
            font-weight: 700;
            color: #333333;
          }
          p {
            color: #666;
            font-size: 14px;
            margin-top: 4px;
          }
        }
      }
      .score {
        // 评分样式
        display: flex;
        margin-right: 10px;
        span {
          color: #faaf00;
          font-size: 15px;
          font: bold;
          text-align: center;
          white-space: nowrap;
        }
        div {
          margin-top: 1.5px;
          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
}
</style>