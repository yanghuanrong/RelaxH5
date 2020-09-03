function layoutPlant(model) {
  const arraySpace = model.split(':')
  const col = []
  arraySpace.forEach(span => {
    col.push({
      span,
      children: []
    })
  });
  return col
}

const layout = []
const data = ['24', '12:12', '8:8:8', '6:6:6:6']

data.forEach((item) => {
  layout.push({
    componentName: "nested-container",
    componentAttrs: {
      row: {
        type: 'flex',
        gutter: "1"
      },
      col: layoutPlant(item)
    }
  })
})

const component = [
  {
    componentName: "van-button",
    draggalbe: true,
    componentText: "按钮",
    componentTitle: "按钮",
    componentAttrs: {
      type: 'default'
    }
  },
  {
    componentName: "van-tag",
    draggalbe: true,
    componentText: "标签",
    componentTitle: "标签",
    componentAttrs: {}
  },
  {
    componentName: "Swiper",
    draggalbe: true,
    componentText: "轮播",
    componentTitle: "轮播",
    componentAttrs: {
      images: ['https://img.yzcdn.cn/vant/apple-2.jpg']
    }
  },
]

export default {
  layout,
  component
}