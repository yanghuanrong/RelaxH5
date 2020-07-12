<template>
  <van-row v-bind="row">
    <van-col v-bind="item" :span="item.span" v-for="(item, k) in col" :key="'col' + k"></van-col>
  </van-row>
</template>

<script>

export default {
  name: "Container",
  props: {
    componentName: String,
    col: Array,
    row: Object
  }
};
</script>