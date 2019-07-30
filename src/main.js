// 导入vue
import Vue from 'vue'

// 使用mint-ui组件库
import 'mint-ui/lib/style.css'
// header
import { Header , Swipe, SwipeItem, Lazyload, Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Lazyload);

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

// 缩略图显示组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

var carCount = parseInt(localStorage.getItem("carCount") || '0') ;

// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state: {
        count: 0,
        carCount: carCount
    },
    mutations: {
        increment(state) {
            state.count ++;
        },
        substract(state, c) {
            state.count -= c;
        },
        addCarCount(state, count) {
            // JSON.stringify() 转换为字符串
            // JSON.parse() 将字符串转换为对象
            state.carCount += count;
            localStorage.setItem("carCount", state.carCount.toString())
        }
    },
    getters: {
        optCount(state) {
            return "getters=当前数据为：" + state.count;
        },
        getCarCount(state) {
            return state.carCount;
        }
    }
})


var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c => c(login),
    router:router,
    store
});





