<template>
  <van-row>
    <van-col v-bind="item" :class="'edit'" :span="item.span" v-for="(item, k) in col" :key="'col' + k">
      <div class="title draggalbe-handle"></div>
      <draggable group="layouts" :list="item.children">
        <template v-for="(item2,index) in item.children">
          <component
            :key="index"
            :is="item2.componentName"
            v-bind="item2"
          ></component>
        </template>
      </draggable>
    </van-col>
  </van-row>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "nested-container",
  components: {
    draggable
  },
  props: {
    componentName: String,
    row: Object,
    col: Array
  },
};
</script>