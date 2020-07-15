import ejs from "ejs";
import FileSaver from "file-saver";
import JSZip from 'jszip'

import viewTemp from './view'

function conversion(data) {
    const HTMLDOM = []

    ComponentToTemplate(data, HTMLDOM)

    const vueTemp = ejs.render(viewTemp.fileTemplates, {
        element: HTMLDOM
    })

    console.log(vueTemp)
    // outExportFileByStr('App.vue', vueTemp)
}

function ComponentToTemplate(data, HTMLDOM) {

    data.forEach((item) => {
        // 组件名
        let componentName = item.componentName.split('-').reverse()[0]

        // 组件数据
        const componentData = {
            attrs: '',
            text: item.componentText
        }

        // 格式化组件标签属性 {key:value} => key="value"
        const attrs = item.componentAttrs

        // 如果是布局组件则需要特殊处理。
        if (componentName === 'container' || componentName === 'nested-container') {
            // col组件处理
            const colTempArray = []
            attrs.col.forEach((item) => {
                const colData = {
                    attrs: '',
                    element: []
                }
                Object.keys(item).forEach(key => {
                    if (key !== 'children') {
                        colData.attrs += ` ${key}="${item[key]}"`
                    }
                })

                // 递归函数
                if (item.children.length > 0) {
                    ComponentToTemplate(item.children, colData.element)
                }

                const colTemp = ejs.render(viewTemp['col'], colData)
                colTempArray.push(colTemp)
            })

            // row组件处理
            const rowData = {
                attrs: '',
                element: colTempArray
            }
            Object.keys(attrs.row).forEach(key => {
                rowData.attrs += ` ${key}="${attrs.row[key]}"`
            })

            const elementCode = ejs.render(viewTemp['row'], rowData)
            HTMLDOM.push(elementCode)
        } else {

            Object.keys(attrs).forEach(key => {
                componentData.attrs += ` ${key}="${attrs[key]}"`
            })
            const elementCode = ejs.render(viewTemp[componentName], componentData)
            HTMLDOM.push(elementCode)
        }
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