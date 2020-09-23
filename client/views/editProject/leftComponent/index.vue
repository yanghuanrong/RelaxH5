<template>
  <div class="editor-toolbar__file">
    <div class="left-layout-wrap">
       <Tree :data="data5" :render="renderContent" class="project-tree" @on-select-change="test"></Tree>
    </div>
  </div>
</template>

<script>
import project from './project'
console.log(project)
 export default {
        data () {
            return {
                data5: [
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
            test(data){
              console.log(data)
            },
            append (data) {
                const children = data.children || [];
                children.push({
                              title: 'About.vue',
                              icon: 'x-icon-vue',
                              type: 'file',
                              expand: true
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
