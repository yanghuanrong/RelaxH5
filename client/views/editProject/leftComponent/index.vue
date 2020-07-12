<template>
  <div class="editor-toolbar__left">
    <div class="left-layout-wrap">
      <draggable
        :list="layout"
        :options="{sort:false}"
        :group="{ name: 'layouts', pull: 'clone', put: false}"
      >
        <Container
          v-for="(item, i) in layout"
          v-bind="item"
          :key="'left-layout' + i"
          class="left-layout-grid"
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data() {
    return {
      layout: [
        {
          name: "布局 1",
          componentName: "Container",
          col: {
            span: "24"
          },
          tasks: []
        },
        {
          name: "布局 2",
          componentName: "Container",
          col: {
            span: "12:12"
          },
           tasks: []

        },
        {
          name: "布局 3",
          componentName: "Container",
          col: {
            span: "8:8:8"
          },
           tasks: []

        }
      ]
    };
  }
};
</script>