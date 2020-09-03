<template>
  <div>
    <Tabs>
      <TabPane label="组件属性" >
        <Form :label-width="80">
          <FormItem label="文本值">
            <Input v-model="component.componentText" @on-blur="saveComponent"></Input>
          </FormItem>
          <Row>
            <Col span="12">
              <FormItem label="按钮类型">
                <Select v-model="component.componentAttrs.type">
                  <Option value="default">default</Option>
                  <Option value="primary">primary</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="按钮形状">
                <Select>
                  <Option value="square">square</Option>
                  <Option value="round">round</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </TabPane>
      <TabPane label="样式属性">
        <Form>
          <Row>
            <Col :span="8">
              <FormItem label="宽度">
                <InputNumber 
                  :min="1"
                  v-model="componentStyle.width"
                  @on-change="onChange"
                />
              </FormItem>
            </Col>
            <Col :span="8">
              <FormItem label="高度">
                <InputNumber
                  :min="1"
                  v-model="componentStyle.height"
                  @on-change="onChange"
                />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col :span="24">
              <FormItem label="样式配置">
                <Input type="textarea"
                  :rows="4"
                  v-model="styleTextarea"
                  placeholder="please enter url description"
                />
              </FormItem>
            </Col>
          </Row>
        </Form>
      </TabPane>
      <TabPane label="事件触发"></TabPane>
      <TabPane label="入场动画">Content of tab 3</TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: "editvan-button",
  props: {
    drawerComponent: Object,
  },
  data() {
    return {
      component: {},
      componentStyle: {},
      styleTextarea: "",
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: "",
      },
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
      console.log(11)
      this.$store.commit("saveComponent", this.component);
    },
    onChange(value) {
      const oldStyle = this.componentStyle;
      const newStyle = {};
      Object.keys(oldStyle).forEach((key) => {
        if (oldStyle[key]) {
          this.$set(newStyle, key, oldStyle[key] + "px");
        }
      });
      this.styleTextarea = JSON.stringify(newStyle, null, 2);
      this.$set(this.component.componentAttrs, "style", newStyle);
      this.saveComponent();
    },
  },
};
</script>