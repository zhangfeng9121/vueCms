<template>
	<div id="comment">
		<h3>发表评论</h3>
	    <hr>
	    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="fabiao">发表评论</mt-button>

		<div class="cmt-list">
	      	<div class="cmt-item" v-for="(item, i) in commentList" :key="item.id">
	        	<div class="cmt-title">
	          		第{{i}}楼&nbsp;&nbsp;用户：{{item.user}}&nbsp;&nbsp;发表时间：{{item.date}}
	        	</div>
	        	<div class="cmt-body">
	          		{{item.content}}
	        	</div>
	      	</div>
	    </div>

		<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: '',
			commentList: [
				{id: '1', user: 'ztt', date: new Date(), content: 'xxxxxxxxxx'},
				{id: '2', user: 'dgg', date: new Date(), content: 'fgdagfsdf'},
				{id: '3', user: 'dfg', date: new Date(), content: 'fdgsgfsdfg'},
				{id: '4', user: 'yyy', date: new Date(), content: 'gdfggsdfgsdf'},
				{id: '5', user: 'dfb', date: new Date(), content: 'sfdgsfgfgf'},
				{id: '6', user: 'khg', date: new Date(), content: 'gsdgdg'},
				{id: '7', user: 'adf', date: new Date(), content: 'fdsgdgqgeer'},
				{id: '8', user: 'fsg', date: new Date(), content: 'dfgsfgsdg'},
			]
		}
	},
	methods: {
		fabiao() {
			var oneCon = {id: 'x', user: 'lsq',date: new Date(), content: this.msg}
			this.commentList.unshift(oneCon);
		},
		getMore() {
			console.log(1111111);
			var tt = [
				{id: '10', user: 'ztt', date: new Date(), content: '札萨克的肌肤'},
				{id: '11', user: 'dgg', date: new Date(), content: '大撒法第四'},
			];
			console.log(tt);
			this.commentList = this.commentList.concat(tt);
			console.log(this.commentList);
			console.log(333333);

		}
	}
}
</script>

<style scoped="comment.vue" lang="less">
	#comment {

		padding-bottom: 50px;

		textarea {
		    font-size: 14px;
		    height: 85px;
		    margin: 0;
		}

		.cmt-list {
			.cmt-item {
				line-height: 30px;
				.cmt-title {
					margin-top: 5px;
					background-color: #bbb;
				}

				.cmt-body {
					text-indent: 2em;
				}
			}
		}
	}
</style>