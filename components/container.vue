<template>
    <!-- <draggable
      :list="layoutDep"
      :options="{sort:false}"
      :group="{ name: 'layouts', pull: 'clone', put: false}"
    > -->
      <van-row v-bind="row">
        <van-col v-bind="colDep" :span="item" v-for="(item, k) in colDep.span" :key="'col' + k">
          
        </van-col>
      </van-row>
    <!-- </draggable> -->
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Container",
  components: {
    draggable
  },
  props: {
    componentName: String,
    col: Object,
    row: Object
  },
  computed: {
    colDep() {
      const newCol = Object.assign({}, this.col);
      if(this.col.span === '24'){
        newCol.span = [24]
      } else {
        newCol.span = this.col.span.split(":")
      }
      return newCol;
    }
  }
};
</script>