<template>
    <div id="goodInfo">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballShow" ref="ball"></div>
        </transition>
        <!-- 轮播 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <cmt-swipe></cmt-swipe>
                </div>
            </div>
        </div>

        <!-- 选择 -->
        <div class="mui-card">
            <div class="mui-card-header">额外信息或支持的操作</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        <span class="now">555</span>
                        <span class="old">666</span>
                    </div>
                    <div class="number">
                        购买数量：<number-box @getNum="getNum"></number-box>
                    </div>
                    <div class="btn">
                        <mt-button type="primary" >primary</mt-button>
                        <mt-button type="danger" @click="addShopCar">danger</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 参数 -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>

<script>
import swipe from '../subcomponents/swipe.vue'
import mui from '../../lib/mui/js/mui.min.js'
import numberBox from '../subcomponents/number.vue'

export default {
    data() {
        return {
            ballShow: false
        }
    },

    methods: {
        addShopCar() {
            this.ballShow = true;
        },
        getNum(num) {
            console.log("===" + num);
        },
        beforeEnter(el) {
            el.style.transform = "translate(0, 0)";
        },
        enter(el,done) {
            var ballPosition = this.$refs.ball.getBoundingClientRect();
            var muiBadge = document.getElementById("badge").getBoundingClientRect();
            var w = muiBadge.left - ballPosition.left + 50;
            var h = muiBadge.top - ballPosition.top;

            el.offsetWidth;
            el.style.transform = "translate(" + w + "px, " + h + "px)";
            el.style.transition = "all 1s cubic-bezier(.4, -0.3, 1, .68)";
            done();
        },
        afterEnter(el) {
            this.ballShow = !this.ballShow;
        }
    },
    components: {
        'cmt-swipe': swipe,
        'number-box': numberBox
    },
}
</script>

<style scoped="goodInfo.vue" lang="less">
    #goodInfo {
        position: relative;
        background-color: #e0e0e0;
        overflow: hidden;
        .mui-card {
            .mui-card-content {
                .btn {
                    margin-top: 10px;
                }
            }
        }


        .ball {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            left: 145px;
            top: 338px;
            z-index: 9999;
        }
    }
</style>