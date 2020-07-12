<template>
  <div class="editor-page">
    <div class="page-wrapper">
      <leftComponent />
      <phoneComponent />
      <rightComponent />
    </div>
  </div>
</template>

<script>
import leftComponent from "./leftComponent/index";
import phoneComponent from "./phoneComponent/index";
import rightComponent from "./rightComponent/index"

export default {
  name: "editroView",
  components: {
    leftComponent,
    phoneComponent,
    rightComponent
  }
};
</script>
