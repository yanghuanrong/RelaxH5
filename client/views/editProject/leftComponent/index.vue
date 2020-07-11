<template>
  <div class="editor-toolbar__left">
    <div class="left-layout-wrap">
      <draggable
        :list="layout"
        :options="{sort:false}"
        :group="{ name: 'layouts', pull: 'clone', put: false}"
      >
        <Container v-for="(item, i) in layout" v-bind="item" :key="'left-layout' + i" class="left-layout-grid" />
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
          id: 0,
          componentName: "Container",
          row: {
            tag: "ul",
            gutter: 10,
          },
          col: {
            span: "24",
            tag: "li"
          }
        },
        {
          name: "布局 2",
          id: 1,
          componentName: "Container",
          row: {
            tag: "ul",
            gutter: 10,
          },
          col: {
            span: "8:8:8",
            tag: "li"
          }
        },
      ]
    };
  }
};
</script>