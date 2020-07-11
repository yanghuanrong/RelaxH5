<template>
  <div>
    <draggable
      group="layouts"
      style="min-height:100%; overflow: auto"
      :list="list"
      :options="{
                   }"
    >
      <template v-for="(item, i) in list">
        <div>{{item.name}}</div>
        <!-- <component :key="index" :is="item.componentName"
                               :dataIIndex="index + ''"
                               v-bind="item"
        ></component>-->
      </template>
    </draggable>
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
      list: []
    };
  }
};
</script>