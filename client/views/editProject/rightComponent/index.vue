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
import defaultLayout from "./defaultLayout"

export default {
  components: {
    draggable
  },
  data() {
    return {
      list: defaultLayout.layout
    };
  }
};
</script>