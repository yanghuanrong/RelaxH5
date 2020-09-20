<template>
  <div>
    <Tabs>
      <TabPane label="样式">
        <Form :label-width="80">
          <FormItem label="文本值">
            <Input
              type="textarea"
              :rows="4"
              placeholder="请输入文本"
              v-model="component.componentText"
              @on-blur="saveComponent"
            />
          </FormItem>

          <FormItem label="字号">
            <Dropdown
              placement="bottom-start"
              @on-click="selectFontSize"
              trigger="custom"
              :visible="fontSizeDrap"
            >
              <Input
                style="width:100px"
                suffix="ios-arrow-down"
                v-model="fontSizeValue"
                @on-blur="fontSizeDrap = false"
                @on-focus="fontSizeDrap = true"
              />
              <DropdownMenu slot="list">
                <DropdownItem :name="item" v-for="item in fontSizeList" :key="item">{{ item+'px' }}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <ButtonGroup style="margin-left: 20px">
              <Button @click="fontSizeReduce">A-</Button>
              <Button @click="fontSizeIncrease">A+</Button>
            </ButtonGroup>
          </FormItem>

          <FormItem label="文字颜色">
            <ColorPicker v-model="fontTextColor" />
          </FormItem>

          <FormItem label="背景颜色">
            <ColorPicker v-model="fontBackground" />
          </FormItem>

          <FormItem label="行高">
            <Slider
              v-model="fontLineHeight"
              :min="0"
              :max="3"
              :step="0.1"
              @on-input="lineHeight"
              show-input
            ></Slider>
          </FormItem>

          <FormItem label="字距">
            <Slider
              v-model="fontLetterSpacing"
              :min="0"
              :max="100"
              :step="1"
              @on-input="LetterSpacing"
              show-input
            ></Slider>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: "editText",
  props: {
    drawerComponent: Object,
  },
  data() {
    return {
      fontSizeList: [12, 13, 14, 16, 18, 20, 24, 32, 48, 64, 96],
      fontSizeDrap: false,
      fontSizeValue: 14,
      fontLineHeight: 1.5,
      fontLetterSpacing: 0,
      fontBackground: "",
      fontTextColor: "",
      component: {},
      componentStyle: {},
    };
  },
  created() {
    this.component = this.drawerComponent;
    const style = this.component.componentAttrs.style;

    this.fontSizeValue = style.fontSize ? parseInt(style.fontSize) : 14;
    this.fontLineHeight = style.lineHeight || 1.5;
  },
  watch: {
    // 字体大小
    fontSizeValue(val) {
      this.$set(this.component.componentAttrs.style, "fontSize", val + "px");
      this.saveComponent();
    },
    // 背景色
    fontBackground(val) {
      this.$set(this.component.componentAttrs.style, "backgroundColor", val);
      this.saveComponent();
    },
    fontTextColor(val) {
      this.$set(this.component.componentAttrs.style, "color", val);
      this.saveComponent();
    }
  },
  methods: {
    saveComponent() {
      this.$store.commit("saveComponent", this.component);
    },
    // 切换文字大小
    selectFontSize(val) {
      this.fontSizeValue = val;
    },
    // 文字尺寸增大
    fontSizeIncrease() {
      this.fontSizeValue += 2;
    },
    // 文字尺寸缩小
    fontSizeReduce() {
      this.fontSizeValue -= 2;
      if (this.fontSizeValue <= 12) {
        this.fontSizeValue = 12;
      }
    },
    // 文字行高
    lineHeight(val) {
      this.$set(this.component.componentAttrs.style, "lineHeight", val);
      this.saveComponent();
    },
    // 文字间距
    LetterSpacing(val) {
      this.$set(
        this.component.componentAttrs.style,
        "letterSpacing",
        val * 0.5 + "px"
      );
      this.saveComponent();
    },
  },
};
</script>