// 抽离路由模块

// 导入vue-router模块
import VueRouter from 'vue-router'

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        // {
        //     path: '/account',
        //     component:account,
        //     children: [
        //         {path:'login', component:zLogin},
        //         {path:'register', component:register},
        //     ]
        // },
    ]
});

export default router