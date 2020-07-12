<template>
  <div class="editor-toolbar__center">
    <div class="edit-main">
      <!-- <div class="editor-toolbar__top">
        <div class="control-bar-wrapper">
          <div class="zoom">
            <a-icon type="zoom-in" />
            <span>100%</span>
            <a-icon type="zoom-out" />
          </div>
          <div class="button-item">
            <a-icon type="rollback" />
            <span>撤销</span>
          </div>
          <div class="button-item">
            <a-icon type="retweet" />
            <span>重做</span>
          </div>
          <div class="button-item">
            <a-icon type="redo" />
            <span>清空</span>
          </div>
          <div class="button-item">
            <a-icon type="eye" />
            <span>预览</span>
          </div>
          <div class="button-item">
            <a-icon type="download" />
            <span>下载</span>
          </div>
        </div>
      </div>-->

      <div class="phone-page">
        <draggable
          group="layouts"
          :list="list"
          handle=".draggalbe-handle"
          class="phone-wrap eidtor"
          :options="{
            animation: 150,
            fallbackOnBody: true
          }"
        >
          <template v-for="(item, i) in list">
            <component :key="'component' + i" :is="item.componentName" v-bind="item"></component>
          </template>
        </draggable>
      </div>
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
      console.table(value);
    }
  }
};
</script>