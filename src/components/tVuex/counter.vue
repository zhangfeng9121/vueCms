<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="this.$store.state.count">
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 5
    };
  },
  methods: {
    add() {
        this.$store.commit("increment");
    },
    remove() {
        this.$store.commit("substract", 2);
    }
  },
};
</script>

<style lang="less" scoped="counter.vue">

</style>
