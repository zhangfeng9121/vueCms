<template>
	<div class="newsinfo">
		<h3 class="title">标题</h3>
		<div class="fu-title">
			<p>ttttttttttt</p>
			<p>xxxxxxxxxxx</p>
		</div>

		<hr/>
	</div>

</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>

<style scoped="newsInfo.vue" lang="less">
	.newsinfo {
		padding: 0 3px;
		.title {
			font-size: 16px;

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
	}
</style>