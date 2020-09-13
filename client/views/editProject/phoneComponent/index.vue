<template>
  <div class="editor-toolbar__center">
    <div class="edit-main">
      <div class="eidtor-code" @click="clickCode">
        <!-- <a-icon type="code" /> -->
        <Icon type="md-add" />
      </div>
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
        <draggable-view
          handle=".draggalbe-handle"
          class="phone-wrap eidtor"
          :options="{
            animation: 150,
            fallbackOnBody: true
          }"
          :list="page"
        />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { conversion } from "@templates/utils";

export default {
  components: {
    draggable
  },
  data() {
    return {
      // list: []
    };
  },
  computed: {
    page: {
      get() {
        console.log(this.$store.state.pageComponent)
        return this.$store.state.pageComponent;
      },
      set(value) {
        console.log(11111)
        this.$store.commit("updatePage", value);
      }
    }
  },
  methods: {
    clickCode() {
      conversion(this.page);
    },
    
  }
};
</script>