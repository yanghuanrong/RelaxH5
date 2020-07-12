<template>
  <div class="phone-page">
    <div class="phone-wrap eidtor">
      <draggable
        group="layouts"
        :list="list"
        :options="{
        animation: 150,
        fallbackOnBody: true,
        invertSwap: true
      }"
      >
        <template v-for="(item, i) in list">
          <component :key="'component' + i" :is="item.componentName" v-bind="item"></component>
        </template>
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
  },
  watch: {
    list: function(value) {
      console.log(value);
    }
  }
};
</script>