<template>
    <div class="calcu">
        <counter></counter>
        <hr>
        <amount></amount>
    </div>
</template>

<script>
import amount from './amount.vue'
import counter from './counter.vue'
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        amount,
        counter
    }
}
</script>

<style scoped="calculatorVuex.vue" lang="less">
    .calcu{
        padding-top: 50px;
    }
</style>