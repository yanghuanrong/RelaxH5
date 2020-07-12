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
      list: []
    };
  },
  watch: {
    list: function(value) {
      console.log(value);
    }
  }
};
</script>