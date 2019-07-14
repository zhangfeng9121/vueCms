// 导入vue
import Vue from 'vue'

// 使用mint-ui组件库
import 'mint-ui/lib/style.css'
// header
import { Header , Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入mui样式
import './lib/mui/css/mui.min.css'

// 引入icon外部样式
import './lib/mui/css/icons-extra.css'

// 导入全局样式
import './css/main.css'


// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入组件
import login from './App.vue'

// 导入路由
import router from './router.js'

var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c => c(login),
    router:router
});





