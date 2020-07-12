export default {
    layout: [
        {
          name: "布局 1",
          componentName: "nested-container",
          col: [
            {
              span: 24,
              children: []
            }
          ]
        },
        {
          name: "布局 2:2",
          componentName: "nested-container",
          col: [
            {
              span: 12,
              children: []
            },
            {
              span: 12,
              children: []
            }
          ]
        },
        {
          name: "布局 3:3:3",
          componentName: "nested-container",
          col: [
            {
              span: 8,
              children: []
            },
            {
              span: 8,
              children: []
            },
            {
              span: 8,
              children: []
            }
          ]
        }
      ]
}