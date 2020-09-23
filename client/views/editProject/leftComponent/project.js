export default [{
  title: 'public',
  icon: 'x-icon x-icon-folder',
  type: 'folder',
  expand: true,
  children: [
    {
      title: 'favicon.ico',
      icon: 'x-icon-vue',
      type: 'ico',
      expand: true
    },
    {
      title: 'index.html',
      icon: 'ivu-icon ivu-icon-logo-html5',
      type: 'file',
      expand: true
    },
  ]
}, 
{
  title: 'src',
  icon: 'x-icon x-icon-folder',
  type: 'folder',
  expand: true,
  children: [
    {
      title: 'assets',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      expand: true
    },
    {
      title: 'router',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      children: [
        {
          title: 'index.js',
          icon: 'ivu-icon ivu-icon-logo-javascript',
          type: 'file',
          expand: true
        },
      ],
    },
    {
      title: 'store',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      children: [
        {
          title: 'index.js',
          icon: 'ivu-icon ivu-icon-logo-javascript',
          type: 'file',
          expand: true
        },
      ],
    },
    {
      title: 'style',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      children: [
        {
          title: 'global.less',
          icon: 'ivu-icon ivu-icon-logo-css3',
          type: 'file',
          expand: true
        },
      ],
    },
    {
      title: 'view',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      expand: true,
      children: [
        {
          title: 'index.vue',
          icon: 'x-icon-vue',
          type: 'vue',
          selected: true,
          expand: true
        },
      ],
    },
    {
      title: 'App.vue',
      icon: 'x-icon-vue',
      type: 'vue',
      expand: true
    },
    {
      title: 'main.js',
      icon: 'ivu-icon ivu-icon-logo-javascript',
      type: 'file',
      expand: true
    },
  ]
},
{
    title: 'babel.config.js',
    icon: 'ivu-icon ivu-icon-logo-javascript',
    type: 'file',
    expand: true
},
{
  title: 'package.json',
  icon: 'x-icon-json',
  type: 'file',
  expand: true
},
{
  title: 'README.md',
  icon: 'ivu-icon ivu-icon-ios-information-circle',
  type: 'file',
  expand: true
}
]