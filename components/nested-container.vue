<template>
  <van-row v-bind="row">
    <van-col
      v-bind="item"
      :class="'edit'"
      :span="item.span"
      v-for="(item, k) in col"
      :key="'col' + k"
    >
      <div class="title draggalbe-handle"></div>
      <draggable group="layouts" style="min-height:30px" :list="item.children">
        <template v-for="(item2,i) in item.children">
          <component
            :key="'component' + i"
            :is="item2.componentName"
            v-bind="item2.componentAttrs"
          >{{item2.componentText || ''}}</component>
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
  }
};
</script>