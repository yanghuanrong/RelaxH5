<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item >
      1
    </van-swipe-item>
     <van-swipe-item >
      2
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
