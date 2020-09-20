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
                v-model="componentStyle.fontSize"
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
            <ColorPicker v-model="componentStyle.color" />
          </FormItem>

          <FormItem label="背景颜色">
            <ColorPicker v-model="componentStyle.background" />
          </FormItem>

          <FormItem label="行高">
            <Slider
              v-model="componentStyle.lineHeight"
              :min="0"
              :max="3"
              :step="0.1"
              @on-input="setLineHeight"
              show-input
            ></Slider>
          </FormItem>

          <FormItem label="字距">
            <Slider
              v-model="componentStyle.letterSpacing"
              :min="0"
              :max="100"
              :step="1"
              @on-input="setLetterSpacing"
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
      fontBackground: "",
      fontTextColor: "",
      component: {},
      componentStyle: {
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: 0,
        color: "",
        background: "",
      },
    };
  },
  created() {
    this.component = this.drawerComponent;
    const style = this.component.componentAttrs.style;

    this.componentStyle.fontSize = style.fontSize ? parseInt(style.fontSize) : 14;
    this.componentStyle.lineHeight = style.lineHeight || 1.5;
    this.componentStyle.letterSpacing = parseFloat(style.letterSpacing)  * 2 || 0
    this.componentStyle.color = style.color || ''
    this.componentStyle.background = style.background || ''

  },
  watch: {
    // 字体大小
    "componentStyle.fontSize": function(val){
      this.setStyle('fontSize', val + 'px')
    },
    // 
    "componentStyle.background": function(val){
      this.setStyle('background', val)
    },
    "componentStyle.color": function(val){
      this.setStyle('color', val)
    },
  },
  methods: {
    saveComponent() {
      this.$store.commit("saveComponent", this.component);
    },
    // 切换文字大小
    selectFontSize(val) {
      this.componentStyle.fontSize = val;
    },
    // 文字尺寸增大
    fontSizeIncrease() {
      this.componentStyle.fontSize += 2;
    },
    // 文字尺寸缩小
    fontSizeReduce() {
      this.componentStyle.fontSize -= 2;
      if (this.componentStyle.fontSize <= 12) {
        this.componentStyle.fontSize = 12;
      }
    },
    // 文字行高
    setLineHeight(val) {
      this.setStyle('lineHeight', val)
    },
    // 文字间距
    setLetterSpacing(val) {
      this.setStyle('letterSpacing', val * 0.5 + "px")
    },
    setStyle(key, val){
      this.$set(this.component.componentAttrs.style, key, val);
      this.saveComponent();
    },
  },
};
</script>