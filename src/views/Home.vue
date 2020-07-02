<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button type="button" @click="download">button</button>
  </div>
</template>

<script>
import EJS from "ejs";
import FileSaver from "file-saver";

const VUE_NAME = 'This#is#fileName'

const outExportFileByStr = (fileName,str) => {
    str = str.replace(VUE_NAME,fileName.replace('.vue',''))
    let blob = new Blob([str], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, fileName)
}

export default {
  name: "Home",
  methods: {
    download() {
      var ejs = require("ejs");
      var people = ["geddy", "neil", "alex"];
      const temp = '<div><%= people.join(", ") %></div>';
      var html = ejs.render(temp, { people: people });
      console.log(html);

      outExportFileByStr('hha.vue', html)
      
    }
  }
};
</script>
