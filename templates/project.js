import fileCode from './fileCode'

export default [{
  title: 'public',
  icon: 'x-icon x-icon-folder',
  type: 'folder',
  expand: true,
  content: null,
  children: [{
      title: 'favicon.ico',
      icon: 'x-icon-vue',
      type: 'ico',
      expand: true,
      content: null,
    },
    {
      title: 'index.html',
      icon: 'ivu-icon ivu-icon-logo-html5',
      type: 'html',
      expand: true,
      content: null,
    },
  ]
},
{
  title: 'src',
  icon: 'x-icon x-icon-folder',
  type: 'folder',
  expand: true,
  content: null,
  children: [{
      title: 'assets',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      expand: true,
      content: null,
    },
    {
      title: 'router',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      content: null,
      children: [{
        title: 'index.js',
        icon: 'ivu-icon ivu-icon-logo-javascript',
        type: 'js',
        expand: true,
        content: fileCode.routeJs,
      }, ],
    },
    {
      title: 'store',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      content: null,
      children: [{
        title: 'index.js',
        icon: 'ivu-icon ivu-icon-logo-javascript',
        type: 'js',
        expand: true,
        content: fileCode.storeJs,
      }, ],
    },
    {
      title: 'style',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      content: null,
      children: [{
        title: 'global.less',
        icon: 'ivu-icon ivu-icon-logo-css3',
        type: 'css',
        expand: true,
        content: null,
      }, ],
    },
    {
      title: 'view',
      icon: 'x-icon x-icon-folder',
      type: 'folder',
      expand: true,
      content: null,
      children: [{
        title: 'index.vue',
        icon: 'x-icon-vue',
        type: 'vue',
        selected: true,
        expand: true,
        content: [],
      }, ],
    },
    {
      title: 'App.vue',
      icon: 'x-icon-vue',
      type: 'html',
      expand: true,
      content: fileCode.appVue,

    },
    {
      title: 'main.js',
      icon: 'ivu-icon ivu-icon-logo-javascript',
      type: 'js',
      expand: true,
      content: fileCode.mainJs,

    },
  ]
},
{
  title: 'babel.config.js',
  icon: 'ivu-icon ivu-icon-logo-javascript',
  type: 'js',
  expand: true,
  content: null,
},
{
  title: 'package.json',
  icon: 'x-icon-json',
  type: 'json',
  expand: true,
  content: null,
},
{
  title: 'README.md',
  icon: 'ivu-icon ivu-icon-ios-information-circle',
  type: 'md',
  expand: true,
  content: null,
}
]