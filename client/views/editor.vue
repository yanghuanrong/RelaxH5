<template>
  <div class="editor-page">
    <div class="editor-toolbar__top">
      <img
        class="logo"
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
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
      <div class="user-github">
        <a-icon type="github" />
      </div>
    </div>

    <div class="page-wrapper">
      <div class="editor-toolbar__left">
        <draggable
          :list="list"
          :options="{sort:false}"
          :group="{ name: 'layouts', pull: 'clone', put: false}"
        >
          <div
            style="width: 100px; height: 100px; background: #F00"
            v-for="(item, i) in list"
            :key="i + '1'"
          >
            {{item.name}}
          </div>
        </draggable>
      </div>

      <div class="editor-toolbar__center">
        <div class="edit-main">
           <draggable group="layouts" :list="listb"
                       :options="{
                   }"
            >
                <template v-for="(item, i) in listb" >
                  <div>{{item.name}}</div>
                    <!-- <component :key="index" :is="item.componentName"
                               :dataIIndex="index + ''"
                               v-bind="item"
                    ></component> -->
                </template>
            </draggable>
        </div>
      </div>

      <div class="editor-toolbar__right"></div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Home",
  components: {
    draggable
  },
  data() {
    return {
      listb: [],
      list: [{id:1,name:'嘿嘿'}, {id:2,name:'方法'}, {id:3,name:'嗯嗯'}, {id:4,name:'刚刚'}]
    };
  }
};
</script>
