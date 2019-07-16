<template>
	<div class="news-container">
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/homeContainer/news/newsInfo/' + item.id">
						<img class="mui-media-object mui-pull-left" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563289400&di=f94a3669bcd714e5ba5d0d6002aa5727&src=http://pic49.nipic.com/file/20140922/19282622_105951093000_2.jpg">
						<div class="mui-media-body">
							<h3 class="cms-title">{{item.title}}</h3>
							<div class="cms-desc">
								<label class="cms-autor">作者：{{item.author}}</label>
								<label class="cms-browser">浏览次数：{{item.times}}</label>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				newslist: [
					{ title: '111111111', author: '张三', times: '59', id: '1'},
					{ title: '222222222', author: '张三', times: '20', id: '2'},
					{ title: '333333333', author: '张三', times: '1', id: '3'},
					{ title: '444444444', author: '张三', times: '6', id: '4'},
					{ title: '555555555', author: '张三', times: '58', id: '5'},
					{ title: '666666666', author: '张三', times: '47', id: '6'},
					{ title: '777777777', author: '张三', times: '32', id: '7'},
					{ title: '888888888', author: '张三', times: '20', id: '8'},
					{ title: '999999999', author: '张三', times: '3', id: '9'},
					{ title: '111111111', author: '张三', times: '59', id: '10'},
					{ title: '222222222', author: '张三', times: '20', id: '11'},
					{ title: '333333333', author: '张三', times: '1', id: '12'}, 
					{ title: '444444444', author: '张三', times: '6', id: '13'},
					{ title: '555555555', author: '张三', times: '58', id: '14'},
					{ title: '666666666', author: '张三', times: '47', id: '15'},
					{ title: '777777777', author: '张三', times: '32', id: '16'},
					{ title: '888888888', author: '张三', times: '20', id: '17'},
					{ title: '999999999', author: '张三', times: '3', id: '18'},
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped="newslist.vue" lang="less">
	.news-container {
		.mui-table-view {
			.mui-table-view-cell {
				.mui-media-body {
					.cms-title {
						font-size: 16px;
					}
				}
				.cms-desc {
					color:blue;
					font-size: 14px;
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>