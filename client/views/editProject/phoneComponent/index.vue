<template>
  <div class="phone-wrap">
    <draggable
      group="layouts"
      style="min-height:100%; overflow: auto"
      :list="list"
      @onClone="end"
      :options="{
                   }"
    >
      <template v-for="(item, i) in list">
        <component :key="i" :is="item.componentName"
                               v-bind="item"
        ></component>
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
      list: [{
          name: "布局 1",
          id: 0,
          componentName: "Container",
          row: {
            tag: "ul",
            gutter: 10,
          },
          col: {
            span: "24",
            tag: "li"
          }
        }]
    };
  },
  watch: {
    list: function(value){
      console.log(value)
    }
  },
  methods: {
    end(){
      console.log(
        this.list
      )
    }
  }
};
</script>