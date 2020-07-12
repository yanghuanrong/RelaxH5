<template>
  <!-- <template v-if="col.length > 0"> -->
  <van-row>
    <van-col v-bind="item" :span="item.span" v-for="(item, k) in col" :key="'col' + k">
      <draggable group="layouts" :list="item.children" :options="{ 
                            }">
        <template v-for="(item2,index) in item.children">
          <component
            :key="index"
            :is="item2.componentName"
            v-bind="item2"
            :propsValue="item2.componentName !== 'Iflex' ? item2.propsValue: undefined"
          ></component>
        </template>
      </draggable>
    </van-col>
  </van-row>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Iflex",
  components: {
    draggable
  },
  props: {
    componentName: String,
    col: Array
  },
  created() {
    console.log(this.col);
  }
};
</script>