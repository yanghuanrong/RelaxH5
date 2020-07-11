<template>
  <div class="phone-page">
    <draggable
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
  },
  watch: {
    list: function(value) {
      console.log(value);
    }
  }
};
</script>