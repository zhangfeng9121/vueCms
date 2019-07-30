<template>
    <div id="swipeVue">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    
</script>

<style scoped="swipe.vue" lang="less">
    #swipeVue {
        .mint-swipe {
            height: 200px;
        }

        .mint-swipe .mint-swipe-items-wrap .mint-swipe-item:nth-child(1) {
            background-color: #f00;
        }
        .mint-swipe .mint-swipe-items-wrap .mint-swipe-item:nth-child(2) {
            background-color: #0f0;
        }
        .mint-swipe .mint-swipe-items-wrap .mint-swipe-item:nth-child(3) {
            background-color: #00f;
        }
    }
</style>