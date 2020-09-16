<template>
  <draggable group="layouts" :list="list">
    <template v-for="(item, i) in list">
      <div :key="'component' + i" @click.stop="checked(item.componentID)" :class="{'draggalbe-handle': item.draggalbe}">
          <component
            
            :is="item.componentName"
            v-bind="item.componentAttrs"
            :data-id="item.componentID"
          >{{item.componentText || item.componentTitle}}</component>
      </div>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "draggable-view",
  props: {
    list: Array,
    handle: String,
    options: Object
  },
  components: {
    draggable
  },
  methods: {
    checked(id) {
      this.$store.commit("checkedComponent", id);
    }
  }
};
</script>
