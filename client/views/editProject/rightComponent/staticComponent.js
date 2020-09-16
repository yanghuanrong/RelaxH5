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
    componentName: "div",
    componentEdit: 'editText',
    draggalbe: true,
    componentText: "编辑文本",
    componentTitle: "文本",
    componentAttrs: {
      class: ['text-component'],
      style: {
        width: '100%'
      },
    }
  },
  {
    componentName: "van-button",
    componentEdit: 'editButton',
    draggalbe: true,
    componentText: "按钮",
    componentTitle: "按钮",
    componentAttrs: {
      type: 'default'
    }
  },
  {
    componentName: "van-tag",
    componentEdit: 'editTag',
    draggalbe: true,
    componentText: "标签",
    componentTitle: "标签",
    componentAttrs: {}
  },
  {
    componentName: "Swiper",
    componentEdit: 'editSwiper',
    draggalbe: true,
    componentText: "轮播",
    componentTitle: "轮播",
    componentAttrs: {
      style: {
        width: '100%'
      },
      height: 200,
      loop: true,
      autoplay: 3,
      images: ['https://img.yzcdn.cn/vant/apple-2.jpg', 'https://img.yzcdn.cn/vant/apple-3.jpg', 'http://47.104.247.183:4000/upload_static/images/1575343136136.jpg']
    }
  },
]

export default {
  layout,
  component
}