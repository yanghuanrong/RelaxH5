<template>
  <van-swipe class="my-swipe" :autoplay="autoplay * 1000" indicator-color="white">
    <van-swipe-item v-for="(item, i) in images" :key="i">
      <van-image :height="height" fit="cover" :src="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    images: Array,
    height: Number,
    autoplay: Number,
    'data-id': String
  },
  created(){
    // console.log(this.$store.state.pageComponent)
  }
};
</script>

<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">

</style>