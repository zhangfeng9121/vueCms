// 导入vue
import Vue from 'vue'

// 使用mint-ui组件库
import 'mint-ui/lib/style.css'
// header
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 导入mui样式
import './lib/mui/css/mui.min.css'


// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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





