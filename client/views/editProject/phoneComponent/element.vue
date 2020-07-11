<template>
  <draggable
    group="layouts"
    :list="tasks"
    :options="{
        animation: 150,
        fallbackOnBody: true,
        invertSwap: true
      }"
  >
    <template v-for="(item, i) in tasks">
      <component :key="'component' + i" :is="item.tasks.length >= 1 ? 'nested-draggable' : item.componentName" v-bind="item"></component>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  name: "nested-draggable",
  props: {
    tasks: Array
  },
  created(){
      console.log(this.tasks)
  }
};
</script>