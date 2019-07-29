<template>
	<div id="photoInfo">
		<!-- 内容 -->
		<h3>发的伤口看东方时空空手道解放看</h3>
		<p class="subTitle">
			<span>发表时间：2018-12-12 12:23:12</span>
			<span>点击：10次</span>
		</p>
		<hr>
		<!-- 缩略图区域 -->
		<div class="imageSo">
			<vue-preview :slides="photoList" @close="handleClose"></vue-preview>
		</div>
		<!-- 详情 -->
		<div class="subInfo">
			k开发的是JFK是的看法撒看ask地方喀什地方奥斯陆扩大卢卡斯的积分撒扩大发送旅客的肌肤山卡拉地方啊山卡拉地方上岛咖啡是快乐的
		</div>

		<!-- 评论 -->
		<cmt-com></cmt-com>
	</div>
</template>

<script>
	import comment from '../subcomponents/comment.vue'
	export default {
		data(){
			return {
				photoList: [
					// {id: '1', path: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2228788569,294219945&fm=26&gp=0.jpg',alt: 'picture1', title: 'Image Caption 1', w: 600, h: 400},
					// {id: '2', path: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3471444926,1440914518&fm=26&gp=0.jpg',alt: 'picture2', title: 'Image Caption 2', w: 1200, h: 900}
					{
			            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
			            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
			            alt: 'picture1',
			            title: 'Image Caption 1',
			            w: 600,
			            h: 400
			          },
			          {
			            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
			            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
			            alt: 'picture2',
			            title: 'Image Caption 2',
			            w: 1200,
			            h: 900
			          }
				]
			}
		},
		methods: {
			handleClose () {
		        console.log('close event')
		    }
		},
		components: {
			'cmt-com': comment
		}
	}
</script>

<style scoped="photoInfo.vue" lang="less">
	#photoInfo {
		padding: 0 5px;
		h3 {
			font-size: 15px;
			color: blue;
			text-align: center;
			margin: 15px 0;
		}

		.subTitle {
			display: flex;
			justify-content: space-between;
		}

		.subInfo {
			font-size: 13px;
			color: #555;
			line-height: 30px;
		}

		.imageSo {
			figure {
				text-align: center;
			}
		}
	}
</style>