<template>
  <div>
    <a-tabs>
      <a-tab-pane key="1" tab="组件属性">
        <a-form hide-required-mark>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="文本值">
                <a-input v-model="component.componentText" @blur="saveComponent" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="按钮类型">
                <a-select v-model="component.componentAttrs.type">
                  <a-select-option value="default">default</a-select-option>
                  <a-select-option value="primary">primary</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="按钮形状">
                <a-select>
                  <a-select-option value="square">square</a-select-option>
                  <a-select-option value="round">round</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="样式属性">
        <a-form hide-required-mark>
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="宽度">
                <a-input-number
                  id="inputNumber"
                  :min="1"
                  v-model="componentStyle.width"
                  @change="onChange"
                />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="高度">
                <a-input-number
                  id="inputNumber"
                  :min="1"
                  v-model="componentStyle.height"
                  @change="onChange"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="24">
              <a-form-item label="样式配置">
                <a-textarea
                  :rows="4"
                  v-model="styleTextarea"
                  placeholder="please enter url description"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="3" tab="事件触发">Content of tab 3</a-tab-pane>
      <a-tab-pane key="4" tab="入场动画">Content of tab 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "editvan-button",
  props: {
    drawerComponent: Object
  },
  data() {
    return {
      component: {},
      componentStyle: {},
      styleTextarea: ""
    };
  },
  created() {
    this.component = this.drawerComponent;
    const element = document.querySelector(
      `[data-id="${this.component.componentID}"]`
    );
    if (!element) return;
    this.$set(this.componentStyle, "width", element.offsetWidth);
    this.$set(this.componentStyle, "height", element.offsetHeight);
  },
  mounted() {},
  methods: {
    saveComponent() {
      this.$store.commit("saveComponent", this.component);
    },
    onChange(value) {
      const oldStyle = this.componentStyle;
      const newStyle = {};
      Object.keys(oldStyle).forEach(key => {
        if (oldStyle[key]) {
          this.$set(newStyle, key, oldStyle[key] + "px");
        }
      });
      this.styleTextarea = JSON.stringify(newStyle, null, 2);
      this.$set(this.component.componentAttrs, "style", newStyle);
      this.saveComponent();
    }
  }
};
</script>