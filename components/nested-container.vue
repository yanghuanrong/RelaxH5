<template>
  <div>
    <div v-for="(item, i) in tasks">
      <draggable
        group="layouts"
        :list="item.tasks"
        :options="{
        animation: 150,
        fallbackOnBody: true,
        invertSwap: true
      }"
      >
        <template v-for="(items, i) in item.tasks">
        </template>

          <van-row v-bind="row">
        <van-col v-bind="colDep" :span="item" v-for="(item, k) in colDep.span" :key="'col' + k">
            <!-- <component :is="componentName"></component> -->
          <component :key="'component' + i" :is="items.componentName" v-bind="items"></component>

        </van-col>
      </van-row>
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
  name: "nested-container",
  props: {
    tasks: Array
  },
  created() {
    console.log(this.tasks);
  }
};
</script>