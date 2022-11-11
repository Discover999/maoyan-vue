 <template>
  <div class="t3" v-show="type == 3">
    <!-- 特色功能 -->
    <div class="top" v-if="area">
      <div class="bot1">特色功能</div>
      <div class="bot2">
        <div
          :class="['pat1', index == contype ? 'con' : '']"
          v-for="(item, index) in area"
          :key="item.id"
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
          :class="['pat1', index == contype1 ? 'con' : '']"
          v-for="(item, index) in featureWay"
          :key="item.id"
          @click="activeCon1(index)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
 
