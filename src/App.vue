<!-- 入口组件 -->
<template>
	<div class="app-container">
       <!-- header -->
       <mt-header fixed title="上海资信"></mt-header>


       <!-- main -->
        <div class="mui-content">
            <div class="mui-row m10">
                <div class="mui-col-xs-12">
                    <p>公司名称：上海罗盘信息科技有限公司</p>
                </div>
                <div class="mui-col-xs-4 rb">
                    <p class="h-info tcr">法人代表</p>
                    <p class="tcr">马力</p>
                </div>
                <div class="mui-col-xs-4 rb">
                    <p class="h-info tcr">注册资本</p>
                    <p class="tcr">125542（万元）</p>
                </div>
                <div class="mui-col-xs-4">
                    <p class="h-info tcr">成立日期</p>
                    <p class="tcr">2002-03-12</p>
                </div>
            </div>
            <div class="mui-row">
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            工商信息
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            分支机构
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            法院判决
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            裁判文书
                        </a>
                    </li>
                </div>

                <!-- ---------------------------- -->
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            工商信息
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            分支机构
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            法院判决
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            裁判文书
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            工商信息
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            分支机构
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            法院判决
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            裁判文书
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            工商信息
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            分支机构
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            法院判决
                        </a>
                    </li>
                </div>
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            裁判文书
                        </a>
                    </li>
                </div>
            </div>
        </div>
       <!-- footer -->
       <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
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
    }

    .app-container li {
        list-style: none;
        line-height: 40px;
        border: 1px solid #c0c0c0;
    }

    .m10 {
        margin-top: 10px;
    }

    .h-info {
        color: #333;
        text-align: center;
    }

    .tcr {
        text-align: center;
    }
    
    .mui-col-xs-4 {
        position: relative;
    }

    .rb::before {
        content: '';
        height:20px;
        width: 1px;
        background: #ccc;
        display: block;
        position: absolute;
        top: 15px;
        right: 0;
    }


</style>