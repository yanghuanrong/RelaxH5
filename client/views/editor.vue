<template>
  <div class="editor-page">
    <div class="page-header-wrapper">
      <div class="editor-toolbar__top">
        <img class="logo" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
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
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>
