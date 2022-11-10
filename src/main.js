import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入iconfont样式
import "./assets/font/iconfont.css"
// 引入vant中的组件
import { Toast } from 'vant'
import { IndexBar, IndexAnchor } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Tab, Tabs } from 'vant';
import { TreeSelect } from 'vant';
import { Icon } from 'vant';
import { Dialog } from 'vant';
import { List } from 'vant';

// import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(TreeSelect);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(List);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
