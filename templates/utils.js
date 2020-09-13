import ejs from "ejs";
import FileSaver from "file-saver";
import JSZip from 'jszip'

import viewTemp from './view'
import NameGetTemplate from './manage'

// 导出单文件
function conversion(data) {
    const HTMLDOM = []

    ComponentToTemplate(data, HTMLDOM)
    console.log(HTMLDOM)
    const vueTemp = ejs.render(viewTemp.fileTemplates, {
        element: HTMLDOM
    })

    console.log(vueTemp)
    // outExportFileByStr('App.vue', vueTemp)
}



// 组件转模板
function ComponentToTemplate(data, HTMLDOM) {

    data.forEach((item) => {

        /**
         * 此处的变量名对应组件名称
         * 如果是van的组件会选取van-后面的组件名称
         */
        const componentName = item.componentName.split('-').reverse()[0]
        const name = componentName === 'container' || componentName === 'nested-container' ? 'layout' : componentName

        // 格式化组件标签属性 {key:value} => key="value"
        const attrs = item.componentAttrs
        
        const template = NameGetTemplate[name] && NameGetTemplate[name](attrs)

        HTMLDOM.push(template)
    })
}


function outExportFileByStr(fileName, str) {
    const VUE_NAME = 'This#is#fileName'
    str = str.replace(VUE_NAME, fileName.replace('.vue', ''))
    // str = str.replace(fileName.replace('.vue',''))
    let blob = new Blob([str], {
        type: "text/plain;charset=utf-8"
    });
    FileSaver.saveAs(blob, fileName)
}

export {
    conversion
}