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
      <!-- <div class="box" :key="i">
            {{item.tasks.length}}
            <nested-draggable :tasks="item.tasks"/>
      </div>-->
      <!-- <nested-draggable :key="'component' + i" :tasks="item.tasks" v-if="item.tasks.length > 0" /> -->
      <component :key="'component' + i" :is="item.componentName" v-bind="item"></component>
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
  created() {
    console.log(this.tasks);
  }
};
</script>

<style lang="less">
.box {
  height: 100px;
  background: fade(#f00, 10%);

  .box {
    margin-left: 20px;
  }
}
</style>