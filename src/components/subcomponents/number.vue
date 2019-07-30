<template>
    <div id="number">
        <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='10'>
          <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
          <input class="mui-numbox-input" type="number" ref="nub" @change="changeNum"/>
          <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>

import mui from '../../lib/mui/js/mui.min.js'
export default {
    data() {
        return {

        }
    },

    methods: {
        changeNum() {
            console.log("---" + this.$refs.nub.value);
            this.$emit("getNum", parseInt(this.$refs.nub.value));
        }
    },

    mounted() {
        mui(".mui-numbox").numbox()
    }
}
</script>

<style scoped="number.vue" lang="less">
    #number {
        display: inline-block;
    }
</style>