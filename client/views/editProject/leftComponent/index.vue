<template>
  <div class="editor-toolbar__file">
    <div class="left-layout-wrap">
       <Tree :data="data" :render="renderContent" class="project-tree" ref="tree" @on-select-change="select"></Tree>
    </div>
  </div>
</template>

<script>
import project from './project'

 export default {
        data () {
            return {
                data: [
                    {
                        title: 'RelaxH5',
                        icon: 'x-icon x-icon-folder',
                        type: 'folder',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return <div class="file-row">
                              <div class="file-name">
                                <span class={data.icon}></span> {data.title}
                              </div>
                              <div class="file-button">
                                { data.type === 'folder' 
                                ?
                                <span class="x-icon x-icon-plus" onClick={() => {this.append(data)}}></span>
                                : 
                                <span class="x-icon x-icon-remove" onClick={() => { alert(2) }}></span> 
                                }
                                <span class="x-icon x-icon-download"></span>
                              </div>
                            </div>
                        },
                        children: project
                    }
                ],
            }
        },
        mounted(){
          /* 让选中的页面成为可编辑 */
          const node = this.$refs.tree.getSelectedNodes()
          this.select(node)
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return <div class="file-row">
                  <div class="file-name">
                    <span class={data.icon}></span> {data.title}
                  </div>
                  <div class="file-button">
                    { data.type === 'folder' 
                    ?
                    <span class="x-icon x-icon-plus" onClick={(e) => {e.stopPropagation(); this.append(data)}}></span>
                    : 
                    null
                    }
                    <span class="x-icon x-icon-download" title={`下载 ${data.title}`}></span>
                    <span class="x-icon x-icon-trash-2" onClick={(e) => {e.stopPropagation(); this.remove(root, node, data) }}></span>
                  </div>
                </div>
            },
            select(data){
              const path = this.getFilePath()
              if(path){
                this.$store.commit('checkedFilePath', path)
                this.$store.commit('checkedFile', data)
              }
            },
            getFilePath(){
              let path = ''
              let parent = null
              let selectedNode = this.$refs.tree.flatState.filter(obj => obj.node.selected)
              if(selectedNode.length) {
                selectedNode = selectedNode[0]
                if(selectedNode.node.type === 'folder'){
                  return
                }
              } else {
                return
              }
              const flatState = this.$refs.tree.flatState
              path = selectedNode.node.title
              parent = selectedNode.parent

              deepPath(parent)
              function deepPath(k){
                flatState.filter(obj => {
                  if(obj.nodeKey === k){
                      path = obj.node.title + '/' + path
                      deepPath(obj.parent)
                  }
                })
              }
              return path
          },
            append (data) {
                const children = data.children || [];
                children.push({
                              title: 'About.vue',
                              icon: 'x-icon-vue',
                              type: 'file',
                              expand: true,
                              content: [],
                          },);
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                this.$Modal.confirm({
                    title: `你确定删除 <span style="color:#F00">${data.title}</span> 吗?`,
                    content: `<p>删除${data.title}后不可恢复，请谨慎处理。</p>`,
                    onOk: () => {
                        const parentKey = root.find(el => el === node).parent;
                        const parent = root.find(el => el.nodeKey === parentKey).node;
                        const index = parent.children.indexOf(data);
                        parent.children.splice(index, 1);

                        this.$Message.success('删除成功');
                    },
                });

                
            }
        }
    }
</script>
