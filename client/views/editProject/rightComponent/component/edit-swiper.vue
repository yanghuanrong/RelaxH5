<template>
  <Tabs>
    <TabPane label="组件属性">
      <div>图片列表</div>
      <dl class="img-array" v-for="(item, i) in component.componentAttrs.images" :key="i">
        <dt>
          <van-image width="96" height="96" :src="item" />
        </dt>
        <dd>
          <Input type="textarea" :rows="4" v-model="images[i]" @on-blur="change(i, images[i])" />
          <ButtonGroup shape="circle" class="operation" size="small">
            <Button icon="md-add" @click="add(item)"></Button>
            <Button icon="md-remove" @click="remvoe(i)"></Button>
          </ButtonGroup>
        </dd>
      </dl>
    </TabPane>
    <TabPane label="入场动画">Content of tab 3</TabPane>
  </Tabs>
</template>

<script>
export default {
  name: "editSwiper",
  props: {
    drawerComponent: Object,
  },
  data() {
    return {
      component: {},
      images: {},
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

    this.synchronous();
    console.log(this.component.componentAttrs.images);
  },
  methods: {
    saveComponent() {
      this.$store.commit("saveComponent", this.component);
      this.synchronous();
    },
    synchronous() {
      this.component.componentAttrs.images.forEach((item, i) => {
        this.images[i] = item;
      });
    },
    remvoe(i) {
      this.component.componentAttrs.images.splice(i, 1);
      this.saveComponent();
    },
    add(src) {
      this.component.componentAttrs.images.push(src);
      this.saveComponent();
    },
    change(i, value) {
      this.component.componentAttrs.images[i] = value
      this.saveComponent();
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
.img-array {
  display: flex;
  margin-bottom: 15px;

  dt {
    width: 100px;
  }
  dd {
    flex: 1;
    padding-left: 10px;
    position: relative;

    .operation {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>