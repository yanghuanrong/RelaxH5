<template>
  <div class="editor-toolbar__phone">
    <div class="edit-main">
      <div class="page-path">页面路径：{{filePath}}</div>
      <!-- <div class="eidtor-code" @click="clickCode">
        <Icon type="md-add" />
      </div>-->
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
        <div class="phone-head">
          <div>
            <span class="x-icon x-icon-more-horizontal"></span> 5G
            <span class="x-icon x-icon-wifi"></span>
          </div>
          <span class="time">{{time.text}}</span>
          <div>
            <span class="x-icon x-icon-battery-charging"></span>
          </div>
        </div>
        <div class="phone-body">
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
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { conversion } from "@templates/utils";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      time: {
        text: "00:00",
        timer: null,
      },
    };
  },
  computed: {
    filePath() {
      return this.$store.state.filePath
    },
    page: {
      get() {
        return this.$store.state.pageComponent;
      },
      set(value) {
        this.$store.commit("updatePage", value);
      },
    },
  },
  created() {
    this.time.timer = setInterval(() => {
      const date = new Date();
      let M = date.getHours();
      M = M < 10 ? `0${M}` : M;
      let S = date.getMinutes();
      S = S < 10 ? `0${S}` : S;

      this.time.text = M + ":" + S;
    }, 1000);
  },
  methods: {
    clickCode() {
      conversion(this.page);
    },
  },
};
</script>