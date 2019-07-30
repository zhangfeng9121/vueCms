<template>
	<div>
		<!-- 轮播区域 -->
		<cmt-swipe></cmt-swipe>
		
		<!-- 图标视图 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/homeContainer/news">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/homeContainer/photograph">
                    <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
                    <!-- <span class="mui-badge">5</span> -->
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/homeContainer/goodList">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/homeContainer/calcu">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></router-link></li>
        </ul> 
	</div>
</template>

<script>
import swipe from '../subcomponents/swipe.vue'
export default {
    data() {
        return {

        }
    },

    methods: {

    },

    components: {
        'cmt-swipe': swipe
    }
}
</script>

<style>
	.mui-grid-view.mui-grid-9 {
		background-color: #fff;
		border: none;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: none;
	}
	
	.mui-table-view .mui-grid-view .mui-table-view-cell .mui-media-body {
		font-size: 13px;
		color: #444;
	}

	.mui-table-view img {
		width: 60px;
		height: 60px;
	}
</style>