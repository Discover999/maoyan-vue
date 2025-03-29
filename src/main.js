import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
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
import { Loading } from 'vant';

// import 'vant/lib/index.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Toast);
app.use(Cell);
app.use(CellGroup);
app.use(IndexBar);
app.use(IndexAnchor);
app.use(Tab);
app.use(Tabs);
app.use(TreeSelect);
app.use(Icon);
app.use(Dialog);
app.use(List);
app.use(Loading);

app.mount('#app');
