<template>
  <div class="editor-toolbar__file">
    <div class="left-layout-wrap">
      <Tree
        :data="data"
        :render="renderContent"
        class="project-tree"
        ref="tree"
        @on-select-change="select"
      ></Tree>

      <Modal
        v-model="fileModal.isShow"
        @on-visible-change="initFileModal"
        title="新增文件"
        width="400"
      >
        <Form :label-width="80" :model="fileModal" ref="fileForm" :rules="fileModalRule" >
          <FormItem label="文件名称" prop="name">
            <Input
              placeholder="请输入文件名称"
              v-model="fileModal.name"
            />
          </FormItem>
          <FormItem label="文件类型" prop="type">
            <Select v-model="fileModal.type">
                <Option value="vue">Vue文件</Option>
                <Option value="folder">文件夹</Option>
            </Select>
          </FormItem>
          <FormItem label="注册路由" prop="router" v-if="fileModal.type === 'vue'">
            <Checkbox v-model="fileModal.router">注册为路由</Checkbox>
          </FormItem>
        </Form>

        <div slot="footer">
          <Button type="text" size="large" @click="fileModal.isShow = false">取消</Button>
          <Button type="primary" size="large" @click="fileModalOK">确定</Button>
        </div>
    </Modal>
    </div>
  </div>
</template>

<script>
import project from "@templates/project";

export default {
  data() {
    return {
      fileModal: {
        isShow: false,
        name: '',
        type: 'vue',
        router: true,
      },
      fileData: null,
      fileModalRule: {
        name: [{
           required: true,
           validator:(rule, value, cb) => this.isFileName(value, cb), trigger: 'blur'
        }]
      },
      data: [
        {
          title: "RelaxH5",
          icon: "x-icon x-icon-folder",
          type: "folder",
          expand: true,
          render: (h, { root, node, data }) => {
            return (
              <div class="file-row">
                <div class="file-name">
                  <span class={data.icon}></span> {data.title}
                </div>
                <div class="file-button">
                  {data.type === "folder" ? (
                    <span
                      class="x-icon x-icon-plus"
                      onClick={() => {
                        this.append(data);
                      }}
                    ></span>
                  ) : (
                    <span
                      class="x-icon x-icon-remove"
                      onClick={() => {
                        alert(2);
                      }}
                    ></span>
                  )}
                  <span class="x-icon x-icon-download"></span>
                </div>
              </div>
            );
          },
          children: project,
        },
      ],
    };
  },
  mounted() {
    /* 让选中的页面成为可编辑 */
    const node = this.$refs.tree.getSelectedNodes();
    this.select(node);
  },
  methods: {
    isFileName(value, callback){
        const reg = new RegExp("^[a-zA-Z0-9]+$");
        if(value === ''){
          return callback('请填写文件名称');
        } else if(!reg.test(value)){
          return callback('文件名称不合法')
        }

        const children = this.fileData.children || [];
        let isSome = false
        if(children.length){
          const vueFile = children.filter(item => {
            if(item.type === 'vue'){
              return item
            }
          })
          const folderFile = children.filter(item => {
            if(item.type === 'folder'){
              return item
            }
          })

          if(this.fileModal.type === 'vue'){
            isSome = vueFile.some((item) => {
              return item.title === value + '.vue'
            })
          }
          
          if(this.fileModal.type === 'folder'){
            isSome = folderFile.some((item) => {
              return item.title === value
            })
          }
          
          if(isSome){
            return callback('文件名称已存在')
          } else {
            return callback()
          }
        }
        
        callback()
    },
    initFileModal(status){
      if(!status){
        this.$refs.fileForm.resetFields()
        this.fileModal.name = ''
      }
    },
    fileModalOK(){
      this.$refs.fileForm.validate((valid) => {
        if (valid) {
          this.$Message.success('文件创建成功!');
          this.fileModal.isShow = false

          const data = this.fileData
          const children = data.children || [];

          let name = this.fileModal.name
          let icon = 'x-icon x-icon-folder'
          let content = null

          if (this.fileModal.type === 'vue'){
            name = name + '.vue'
            icon = "x-icon-vue"
            content = []
          }

          children.push({
            title: name,
            icon: icon,
            type: this.fileModal.type,
            expand: true,
            content: content,
          });

          this.$set(data, "children", children);
          // console.log(this.fileModal)
        }
      })
    },
    select(data) {
      const path = this.getFilePath();
      if (path) {
        this.$store.commit("checkedFileType", {
          content: data[0].content,
          type: data[0].type,
          path,
        });
        this.$store.commit("checkedFile", data);
      }
    },
    getFilePath() {
      let path = "";
      let parent = null;
      let selectedNode = this.$refs.tree.flatState.filter(
        (obj) => obj.node.selected
      );
      if (selectedNode.length) {
        selectedNode = selectedNode[0];
        if (selectedNode.node.type === "folder") {
          return;
        }
      } else {
        return;
      }
      const flatState = this.$refs.tree.flatState;
      path = selectedNode.node.title;
      parent = selectedNode.parent;

      deepPath(parent);
      function deepPath(k) {
        flatState.filter((obj) => {
          if (obj.nodeKey === k) {
            path = obj.node.title + "/" + path;
            deepPath(obj.parent);
          }
        });
      }
      return path;
    },
    append(data) {
      this.fileData = data
      this.fileModal.isShow = true
    },
    remove(root, node, data) {
      this.$Modal.confirm({
        title: `你确定删除 <span style="color:#F00">${data.title}</span> 吗?`,
        content: `<p>删除${data.title}后不可恢复，请谨慎处理。</p>`,
        onOk: () => {
          const parentKey = root.find((el) => el === node).parent;
          const parent = root.find((el) => el.nodeKey === parentKey).node;
          const index = parent.children.indexOf(data);
          parent.children.splice(index, 1);

          this.$Message.success("删除成功");
        },
      });
    },
    renderContent(h, { root, node, data }) {
      return (
        <div class="file-row">
          <div class="file-name">
            <span class={data.icon}></span> {data.title}
          </div>
          <div class="file-button">
            {data.type === "folder" ? (
              <span
                class="x-icon x-icon-plus"
                onClick={(e) => {
                  e.stopPropagation();
                  this.append(data);
                }}
              ></span>
            ) : null}
            <span
              class="x-icon x-icon-download"
              title={`下载 ${data.title}`}
            ></span>
            <span
              class="x-icon x-icon-trash-2"
              onClick={(e) => {
                e.stopPropagation();
                this.remove(root, node, data);
              }}
            ></span>
          </div>
        </div>
      );
    },
  },
};
</script>
