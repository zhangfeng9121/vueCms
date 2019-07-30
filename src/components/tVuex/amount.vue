<template>
  <div>
    <!-- <h3>{{ $store.state.count }}</h3> -->
    <!-- <h3>{{ $store.getters.optCount }}</h3> -->
    <h3>当前最新的count值是:{{this.$store.state.count}}</h3>

    <h3>{{ $store.getters.optCount }}</h3>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>

</style>
