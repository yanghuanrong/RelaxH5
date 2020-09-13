<template>
  <Tabs>
    <TabPane label="组件属性">
      <Form :label-width="80">
        <FormItem label="高度">
          <InputNumber v-model="component.componentAttrs.height"></InputNumber>
        </FormItem>
        <FormItem label="轮播间隔">
          <Slider
            v-model="autoplay"
            :min="1"
            :max="5"
            :step="0.1"
            :tip-format="format"
            @on-change="sliderChange"
            show-input
          ></Slider>
        </FormItem>
      </Form>
      <div class="edit-swiper-title">图片列表</div>
      <dl class="img-array" v-for="(item, i) in component.componentAttrs.images" :key="i">
        <dt>
          <van-image width="96" height="96" :src="item" />
        </dt>
        <dd>
          <Input
            type="textarea"
            :rows="4"
            v-model="images[i]"
            @on-blur="change(i, images[i])"
            placeholder="请填充图片路径"
          />
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
      autoplay: 3,
      component: {},
      images: {},
      componentStyle: {},
    };
  },
  created() {
    

    this.component = this.drawerComponent;

    this.autoplay = this.component.componentAttrs.autoplay;
    this.synchronous();

    const element = document.querySelector(
      `[data-id="${this.component.componentID}"]`
    );
    if (!element) return;
    this.$set(this.componentStyle, "width", element.offsetWidth);
    this.$set(this.componentStyle, "height", element.offsetHeight);
  },
  methods: {
    format(val) {
      return "间隔: " + val + "秒";
    },
    saveComponent() {
      this.$store.commit("saveComponent", this.component);
      this.synchronous();
    },
    // 更改轮播间隔
    sliderChange(value) {
      this.component.componentAttrs.autoplay = value;
      this.saveComponent();
    },
    // 更新images列表数据
    synchronous() {
      this.component.componentAttrs.images.forEach((item, i) => {
        this.images[i] = item;
      });
    },
    // 删除图片模块
    remvoe(i) {
      this.component.componentAttrs.images.splice(i, 1);
      this.saveComponent();
    },
    // 增加图片模块
    add(src) {
      this.component.componentAttrs.images.push(src);
      this.saveComponent();
    },
    // 修改图片路径
    change(i, value) {
      this.images[i] = value;
      this.component.componentAttrs.images.forEach((item, i) => {
        this.$set(this.component.componentAttrs.images, i, this.images[i]);
      });
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

.edit-swiper-title {
  margin-bottom: 10px;
}
</style>