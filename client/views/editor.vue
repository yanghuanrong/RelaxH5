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
        <a-tabs default-active-key="1" tab-position="left">
          <a-tab-pane key="1" tab="Tab 1">Content of Tab 1</a-tab-pane>
          <a-tab-pane key="2" tab="Tab 2">Content of Tab 2</a-tab-pane>
          <a-tab-pane key="3" tab="Tab 3">Content of Tab 3</a-tab-pane>
        </a-tabs>
      </div>

      <div class="editor-toolbar__center">
        <div class="edit-main"></div>
      </div>


      <div class="editor-toolbar__right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
