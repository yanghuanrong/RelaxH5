import ejs from "ejs";
import FileSaver from "file-saver";
import JSZip from 'jszip'

import viewTemp from './view'

function conversion(data) {

    let view = []

    data.forEach((item) => {
        const componentName = item.componentName.split('-').reverse()[0]
        const componentData = {
            attrs: '',
            text: item.componentText
        }

        const attrs = item.componentAttrs
        Object.keys(attrs).forEach(key => {
            componentData.attrs += ` ${key}="${attrs[key]}"`
        })

        console.log(viewTemp)
        const domCode = ejs.render(viewTemp[componentName], componentData)

        view.push(domCode)
    })

    const tempVue = ejs.render(viewTemp.fileTemplates, {
        code: view
    })

    console.log(tempVue)
    outExportFileByStr('App.vue', tempVue)
}

const outExportFileByStr = (fileName, str) => {
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