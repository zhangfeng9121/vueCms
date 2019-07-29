// 抽离路由模块

// 导入vue-router模块
import VueRouter from 'vue-router'


// 导入tabbar路由组建
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopContainer from './components/tabbar/shopContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import newslist from './components/new/newslist.vue'
import newsInfo from './components/new/newsInfo.vue'
import photograph from './components/photographs/photograph.vue'

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/homeContainer'},
        { path: '/homeContainer', component: homeContainer},
        { path: '/memberContainer', component: memberContainer},
        { path: '/shopContainer', component: shopContainer},
        { path: '/searchContainer', component: searchContainer},
        { path: '/homeContainer/news', component: newslist},
        { path: '/homeContainer/news/newsInfo/:id', component: newsInfo},
        { path: '/photograph', component: photograph}
    ],
    linkActiveClass: 'mui-active'
});

export default router