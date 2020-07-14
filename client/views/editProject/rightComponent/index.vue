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
              v-bind="item.componentAttrs"
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
          <div :key="'component' + i">{{item.componentText}}</div>
          <!-- <component :key="'component' + i" :is="item.componentName" v-bind="item"></component> -->
        </template>
      </draggable>
    </div>
  </div>
</template>


<script>
import draggable from "vuedraggable";
import defaultLayout from "./defaultLayout";

export default {
  components: {
    draggable
  },
  data() {
    return {
      list: defaultLayout.layout,
      component: [
        {
          componentName: "van-button",
          draggalbe: true,
          componentText: "默认按钮",
          componentAttrs: {
            type: "primary"
          }
        },
        {
          componentName: "van-tag",
          draggalbe: true,
          componentText: "标签",
          componentAttrs: {
            type: "danger"
          }
        }
      ],
      layoutTab: 0
    };
  }
};
</script>