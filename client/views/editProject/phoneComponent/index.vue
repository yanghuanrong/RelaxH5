<template>
  <div class="phone-page">
    <div class="phone-wrap eidtor">
      <nestedDraggable :tasks="list" />
    </div>
    <!-- <draggable
      group="layouts"
      class="phone-wrap eidtor"
      :list="list"
      :options="{
        animation: 150,
        fallbackOnBody: true,
        invertSwap: true
      }"
    >
      <template v-for="(item, i) in list">
        <component :key="i" :is="item.componentName" v-bind="item"></component>
      </template>
    </draggable>-->
  </div>
</template>

<script>
import nestedDraggable from "./element";

export default {
  components: {
    nestedDraggable
  },
  data() {
    return {
      list: [
        {
          name: "布局 1",
          componentName: "Container",
          col: {
            span: "24"
          },
          tasks: [
            {
              name: "布局 2",
              componentName: "Container",
              col: {
                span: "12:12"
              },
              tasks: []
            }
          ]
        }
      ]
    };
  },
  watch: {
    list: function(value) {
      console.log(value);
    }
  }
};
</script>