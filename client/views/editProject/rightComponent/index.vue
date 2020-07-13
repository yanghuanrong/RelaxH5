<template>
  <div class="editor-toolbar__right">
    <div class="right-layout-wrap">
      <van-tabs v-model="layoutTab">
        <van-tab title="默认布局">
          <draggable
            :list="list"
            :options="{sort:false}"
            :group="{ name: 'layouts', pull: 'clone', put: false}"
          >
            <Container
              v-for="(item, i) in list"
              v-bind="item"
              :key="'left-layout' + i"
              class="left-layout-grid"
            />
          </draggable>
        </van-tab>
        <van-tab title="自定义布局">内容 2</van-tab>
      </van-tabs>
      
      <draggable
            :list="component"
            :options="{sort:false}"
            :group="{ name: 'layouts', pull: 'clone', put: false}"
          >
          <template v-for="(item, i) in component">
            <div :key="'component' + i" >
                {{item.text}}
            </div>
            <!-- <component :key="'component' + i" :is="item.componentName" v-bind="item"></component> -->
          </template>
          </draggable>
    </div>
  </div>
</template>


<script>
import draggable from "vuedraggable";
import defaultLayout from "./defaultLayout"

export default {
  components: {
    draggable
  },
  data() {
    return {
      list: defaultLayout.layout,
      component: [
        {
          componentName: 'van-button',
          type: 'primary',
          text: "默认按钮",
          class: 'draggalbe-handle'
        },
        {
          componentName: 'van-tag',
          type: 'danger',
          text: "标签",
          "$slots.default": "标签",
          class: 'draggalbe-handle'
        }
      ],
      layoutTab: 0
    };
  }
};
</script>