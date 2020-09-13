// 组件名去寻找模板
import ejs from "ejs";
import viewTemp from './view'

function layout(attrs) {
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

    // 嵌套组件的处理
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

  return ejs.render(viewTemp['row'], rowData)
}

function Swiper(attrs) {
  return ejs.render(viewTemp['Swiper'], attrs)
}


export default {
  layout,
  Swiper
}

