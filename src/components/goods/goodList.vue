<template>
	<div id="goodList">
		<router-link class="item" v-for="item in goods" :key="item.id" tag="div" to="/homeContainer/goodInfo">
			<img :src="item.path" :alt="item.alt">
			<p class="goodTitle">{{item.title}}</p>
			<div class="info">
				<div class="price">
					<span class="new">￥{{item.nowM}}</span>
					<span class="old">￥{{item.oldM}}</span>
				</div>
				<div class="ld">
					<span>{{item.desc}}</span>
					<span>{{item.many}}</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			goods: [
				{id: '1', path: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2228788569,294219945&fm=26&gp=0.jpg',title: '的看法精神科大夫肯定是封建时代反对法',nowM: '899', oldM: '999',desc: '热卖中', many: '60', alt: '22'},
				{id: '2', path: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3471444926,1440914518&fm=26&gp=0.jpg',title: '斯达克警方立刻大师傅艰苦十大房价快速大福克斯大飞机喀什的',nowM: '899', oldM: '999',desc: '热卖中', many: '60', alt: '11'},
				{id: '2', path: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3527728143,3471917514&fm=26&gp=0.jpg',title: '防空雷达沙发考虑到JFK十大分开发士大夫精神',nowM: '899', oldM: '999',desc: '热卖中', many: '60', alt: '11'},
			]
		}
	},
	methods: {

	}
}
</script>

<style scoped="goodList.vue" lang="less">
	#goodList {
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.item {
			width: 49%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 2px;
			img {
				height: 200px;
				width: 100%;
				padding: 1px;
				box-shadow: 0 0 5px #ccc;
			}

			.goodTitle {
				color: #222;
				line-height: 16px;
				padding: 5px 0;
				margin: 0;
			}

			.info {
				.price {
					font-size: 13px;
					.new {
						color: red;
					}

					.old {
						color: #ccc;
					}
				}
			}

			.ld {
				color: #333;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>