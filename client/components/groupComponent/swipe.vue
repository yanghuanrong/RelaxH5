<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, i) in images" :key="i">
      <van-image width="100%" height="200" fit="cover" :src="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    images: Array,
  },
  created(){
    console.log(this.images)
  }
};
</script>

<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">

</style>