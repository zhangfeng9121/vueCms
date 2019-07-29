<template>
	<div class="newsinfo">
		<h3 class="title">标题xxxxxxxxx</h3>
		<div class="fu-title">
			<p>ttttttttttt</p>
			<p>xxxxxxxxxxx</p>
		</div>

		<hr/>

		<div class="news-content">
			疯狂的是放假咯是否放假啊斯达克放假啊是地方卡萨丁附件四道口附近凯撒的房间开始大幅卡是否按客上的发科萨科夫斯克拉的飞洒地方爱上对方就士大夫开始大幅就案说法送到附近四道口附近迪斯科飞机开始了地方阿斯蒂芬奥克兰地方埃里克森的肌肤卡萨丁法克斯的法克斯的
		</div>

		<div class="news-content">
			疯狂的是放假咯是否放假啊斯达克放假啊是地方卡萨丁附件四道口附近凯撒的房间开始大幅卡是否按客上的发科萨科夫斯克拉的飞洒地方爱上对方就士大夫开始大幅就案说法送到附近四道口附近迪斯科飞机开始了地方阿斯蒂芬奥克兰地方埃里克森的肌肤卡萨丁法克斯的法克斯
		</div>

		<div class="news-content">
			疯狂的是放假咯是否放假啊斯达克放假啊是地方卡萨丁附件四道口附近凯撒的房间开始大幅卡是否按客上的发科萨科夫斯克拉的飞洒地方爱上对方就士大夫开始大幅就案说法送到附近四道口附近迪斯科飞机开始了地方阿斯蒂芬奥克兰地方埃里克森的肌肤卡萨丁法克斯的法克斯
		</div>

		<sub-comment></sub-comment>
	</div>

</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
	data() {
		return {

		}
	},
	methods: {

	},
	components: {
		'sub-comment': comment,
	}
}
</script>

<style scoped="newsInfo.vue" lang="less">
	.newsinfo {
		padding: 0 3px;
		.title {
			font-size: 16px;
			color: red;
			font-weight: 700;
		}
		.fu-title {
			color: #f00;
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			p {
				margin: 0;
				&:nth-of-type(1) {
					text-indent: 2em;
				}
			}
		}

		hr {
			margin: 0;
		}

		.news-content {
			text-indent: 2em;
			color: #888;
			line-height: 24px;
		}
	}
</style>