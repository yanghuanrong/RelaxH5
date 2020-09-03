<template>
  <div class="edit">
    <div class="title draggalbe-handle"></div>
    <van-row v-bind="row">
      <van-col v-bind="item" :span="item.span" v-for="(item, k) in col" :key="'col' + k">

        <!-- <draggable group="layouts" style="min-height:30px" :list="item.children">
          <template v-for="(item2,i) in item.children">
            <div :class="{'draggalbe-handle': item2.draggalbe}" @click.stop="checked(item2.componentID)" :key="'component' + i" >
              <component
                :is="item2.componentName"
                :data-id="item2.componentID"
                v-bind="item2.componentAttrs"
              >{{item2.componentText || ''}}</component>
            </div>
          </template>
        </draggable> -->

        <draggable-view  style="min-height:30px" :list="item.children"/>

      </van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  name: "nested-container",
  props: {
    componentName: String,
    row: Object,
    col: Array
  },
  methods: {
    checked(id) {
      this.$store.commit("checkedComponent", id);
    }
  }
};
</script>