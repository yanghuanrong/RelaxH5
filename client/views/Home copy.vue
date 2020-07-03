<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button type="button" @click="download">button</button>
  </div>
</template>

<script>
import ejs from "ejs";
import FileSaver from "file-saver";
import JSZip from 'jszip'
// const packageInfo = require('../../package.json')

import packageInfo from '../../package.json'

const VUE_NAME = 'This#is#fileName'

const outExportFileByStr = (fileName,str) => {
    str = str.replace(VUE_NAME,fileName.replace('.vue',''))
    let blob = new Blob([str], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, fileName)
}

const htmltemp = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title><%= title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`

const readme = `测试啊`


console.log(packageInfo)

export default {
  name: "Home",
  methods: {
    download() {
      var people = ["geddy", "neil", "alex"];
      const temp = '<template><div><%= people.join(", ") %></div></template>';
      const vue = ejs.render(temp, { people: people });
      const html = ejs.render(htmltemp, {title: '这是个伟大的想法'})
      
      const fileName = '测试'
      const pointer = new JSZip()
      pointer.file('app.vue', vue)
      pointer.file('index.html', html)
      // pointer.file('package.json', packageInfo)
      // pointer.file('README.md', readme)
      pointer.generateAsync({
        type: "blob"
      }).then((blob) => {
          FileSaver.saveAs(blob, `${fileName}.zip`)
      }, (err) => {
          alert('导出失败')
      })
      // outExportFileByStr('hha.vue', html)
      
    }
  }
};
</script>
