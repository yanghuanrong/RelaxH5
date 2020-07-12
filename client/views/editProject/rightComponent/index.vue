<template>
  <div class="editor-toolbar__right">
    <div class="right-layout-wrap">
      <draggable
        :list="list"
        :options="{sort:false}"
        :group="{ name: 'layouts', pull: 'clone', put: false}"
      >
        <Container
          v-for="(item, i) in list"
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
      list: [
        {
          name: "布局 1",
          componentName: "nested-container",
          col: [
            {
              span: 24,
              children: []
            }
          ]
        },
        {
          name: "布局 2:2",
          componentName: "nested-container",
          col: [
            {
              span: 12,
              children: []
            },
            {
              span: 12,
              children: []
            }
          ]
        },
        {
          name: "布局 3:3:3",
          componentName: "nested-container",
          col: [
            {
              span: 8,
              children: []
            },
            {
              span: 8,
              children: []
            },
            {
              span: 8,
              children: []
            }
          ]
        }
      ]
    };
  }
};
</script>