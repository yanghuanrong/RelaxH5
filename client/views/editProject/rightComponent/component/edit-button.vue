<template>
  <Tabs>
    <TabPane label="组件属性">
      <Form :label-width="80">
        <FormItem label="文本值">
          <Input v-model="component.componentText" @on-blur="saveComponent"></Input>
        </FormItem>
        <FormItem label="按钮类型">
          <RadioGroup v-model="component.componentAttrs.type" type="button">
            <Radio label="default">default</Radio>
            <Radio label="primary">primary</Radio>
            <Radio label="danger">danger</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="按钮形状">
          <RadioGroup type="button">
            <Radio label="square">square</Radio>
            <Radio label="round">round</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
    </TabPane>
    <TabPane label="样式属性">
      <Form>
        <Row>
          <Col :span="8">
            <FormItem label="宽度">
              <InputNumber :min="1" v-model="componentStyle.width" @on-change="onChange" />
            </FormItem>
          </Col>
          <Col :span="8">
            <FormItem label="高度">
              <InputNumber :min="1" v-model="componentStyle.height" @on-change="onChange" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col :span="24">
            <FormItem label="样式配置">
              <Input
                type="textarea"
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
</template>

<script>
export default {
  name: "editButton",
  props: {
    drawerComponent: Object,
  },
  data() {
    return {
      component: {},
      componentStyle: {},
      styleTextarea: "",
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

<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">
.ivu-form-item {
  margin-bottom: 10px !important;
}
</style>