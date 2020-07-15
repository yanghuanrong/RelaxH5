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

export default {
  layout
}