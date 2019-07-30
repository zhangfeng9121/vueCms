<!-- 入口组件 -->
<template>
	<div class="app-container">
       <!-- header -->
       <mt-header fixed title="上海资信"></mt-header>

       <!-- main -->
       <transition>
            <router-view></router-view>
       </transition>

       <!-- footer -->
       <nav class="mui-bar mui-bar-tab">

            <router-link class="mui-tab-item" to="/homeContainer">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/memberContainer">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopContainer" id="badge">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{this.$store.getters.getCarCount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/searchContainer">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
	
</script>

<style scoped="App.vue">
    .app-container {
        padding-top: 40px;
        font-size: 15px;
        overflow-x: hidden;
        padding-bottom: 50px;
    }

    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }

</style>