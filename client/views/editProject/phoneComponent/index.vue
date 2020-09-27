<template>
  <div class="editor-toolbar__phone">
    <div class="edit-main">
      <div class="page-path">文件路径：{{filePath}}</div>

      <div class="editor-toolbar__top">
        <div class="control-bar-wrapper">
         
          <div v-if="codeView">
          <Tooltip content="关闭源码" placement="left">
            <div class="button-item" @click="codeView = false">
                <span class="x-icon x-icon-x"></span>
            </div>
            </Tooltip>
          </div>
          <div v-if="!codeView">
          <Tooltip content="查看源码" placement="left">
          <div class="button-item" @click="clickCode">
              <span class="x-icon x-icon-codepen"></span>
          </div>
          </Tooltip>

            <Tooltip content="页面设置" placement="left">
           <div class="button-item">
              <span class="x-icon x-icon-sidebar"></span>
          </div>
            </Tooltip>

          <div class="zoom">
            <Tooltip content="放大" placement="left">
              <div class="x-icon x-icon-zoom-in"></div>
            </Tooltip>
            <span>100%</span>
            <Tooltip content="缩小" placement="left">
              <div class="x-icon x-icon-zoom-out"></div>
            </Tooltip>
          </div>
          </div>

        </div>
      </div>

      <div class="pageCode" v-show="codeView" :style="{
        right: $store.state.fileType.type === 'vue' ? '44px' : '0'
      }">
        <highlight-code :lang="fileType">
            {{pageCode}}
        </highlight-code>
      </div>

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
      pageCode: "",
      codeView: false,
    };
  },
  computed: {
    filePath() {
      return this.$store.state.fileType.path
    },
    fileType(){
      return this.$store.state.fileType.type
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
  watch: {
    '$store.state.fileType.path': function(){
      const fileType = this.$store.state.fileType
      if(fileType.type !== 'vue'){
        this.codeView = true
        this.pageCode = fileType.content
      } else {
        this.codeView = false
      }
    }
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
      this.codeView = true
      this.pageCode = conversion(this.page)
    },
  },
};
</script>