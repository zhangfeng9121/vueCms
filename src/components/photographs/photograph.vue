<template>
    <div id="photograph">
        <!-- 头部导航 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                </div>
            </div>
        </div>
        <!-- /头部导航 -->

        <!-- main -->
        <ul>
          <li v-for="item in imglist" :key="item.id">
            <img v-lazy="item.url">
            <div class="info">{{item.title}}</div>
          </li>
        </ul>
        <!-- /main -->
    </div>
</template>

<script>
    // 初始化mui
    import mui from '../../lib/mui/js/mui.min.js'
    // mui('.mui-scroll-wrapper').scroll({
    //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    // });



export default {
    data() {
        return {
            imglist: [
                {id:'1', url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3527728143,3471917514&fm=26&gp=0.jpg',title: '长得飞快看到JFK是卡夫卡使肌肤抵抗看看方式阿道夫就是的罚款是否深刻搭街坊士大夫开始地方'},

                {id:'2', url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1264032453,952695644&fm=26&gp=0.jpg',title: 'czxvzxv啊手动阀手动阀 的说法是啊打发 发大师傅撒地方'},

                {id:'3', url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735688044,4235283864&fm=26&gp=0.jpg',title: '京东方开饭啦考虑到附件是点反抗军肯定是发昆仑山搭街坊ask的封口费Salk 就看可怜'},

                {id:'4', url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3471444926,1440914518&fm=26&gp=0.jpg',title: '广泛受到法国法撒旦倒萨开发商 啊大家发生的就上岛咖啡 快乐健康'},

                {id:'5', url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=314766778,442494548&fm=26&gp=0.jpg',title: '发生的咖啡Jodi是否军事对抗法术等级饭卡机肯定是开始的疯狂的事 尽快答复吉萨看'},
            ]
        }
    },
    methods: {

    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style scoped="photograph.vue" lang="less">
    * {
        touch-action: pan-y;
    }

    #photograph {
        ul {
            list-style: none;
            margin: 0;
            padding: 0 8px;
            li {
                position: relative;
                margin-bottom: 5px;
                img {
                    // height: 100%;
                    width: 100%;
                    box-shadow: 0 0 3px 3px #ccc;
                    vertical-align: middle;
                }
                img[lazy=loading] {
                    width: 40px;
                    height: 300px;
                    margin: auto;
                }

                .info {
                    font-size: 14px;
                    color: #fff;
                    background-color: rgba(0,0,0,0.4);
                    position: absolute;
                    bottom: 0;
                }
            }
        }
    }
</style>