<template>
  <div class="editor-toolbar__left">
    <!-- <draggable
      :list="list"
      :options="{sort:false}"
      :group="{ name: 'layouts', pull: 'clone', put: false}"
    >-->
    <!-- <component v-for="(item, i) in list" :key="i + '1'" :is="item.name">{{i}}</component> -->
    <!-- </draggable> -->
    <div class="left-layout-wrap">
        <Layout :layout="layout" class="left-layout-grid" />
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
      list: [
        { id: 1, name: "vant" },
        { id: 2, name: "方法" },
        { id: 3, name: "嗯嗯" },
        { id: 4, name: "刚刚" }
      ],
      layout: [
        {
          tag: "ul",
          gutter: 10,
          col: {
            span: "8:8:8",
            tag: "li"
          }
        },
        {
          col: {
            span: "4:16:4"
          }
        }
      ]
    };
  }
};
</script>