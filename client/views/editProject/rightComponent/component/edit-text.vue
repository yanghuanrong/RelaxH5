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

        <div class="align">
          <Tooltip content="居左" placement="top">
            <span class="x-icon x-icon-align-left" :class="{active: componentStyle.textAlign === 'left'}" @click="setTextAlign('left')"></span>
          </Tooltip>
          <Tooltip content="居中" placement="top">
            <span class="x-icon x-icon-align-center" :class="{active: componentStyle.textAlign === 'center'}" @click="setTextAlign('center')"></span>
          </Tooltip>
          <Tooltip content="居右" placement="top">
            <span class="x-icon x-icon-align-right" :class="{active: componentStyle.textAlign === 'right'}" @click="setTextAlign('right')"></span>
          </Tooltip>
          <Tooltip content="两端对齐" placement="top">
            <span class="x-icon x-icon-align-justify" :class="{active: componentStyle.textAlign === 'justify'}" @click="setTextAlign('justify')"></span>
          </Tooltip>
          <i></i>
          <Tooltip content="加粗" placement="top">
            <span class="x-icon x-icon-bold" :class="{active: componentStyle.fontWeight === 'bold'}" @click="setFontWeigh"></span>
          </Tooltip>
          <Tooltip content="倾斜" placement="top">
            <span class="x-icon x-icon-italic" :class="{active: componentStyle.fontStyle === 'italic'}" @click="setFontStyle"></span>
          </Tooltip>
          <Tooltip content="下划线" placement="top">
            <span class="x-icon x-icon-underline" :class="{active: componentStyle.textDecoration === 'underline'}" @click="setTextDecoration"></span>
          </Tooltip>
          <Tooltip content="清除" placement="top">
            <span class="x-icon x-icon-trash"></span>
          </Tooltip>
        </div>
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
      component: {},
      componentStyle: {
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: 0,
        color: "",
        background: "",
        textAlign: "left",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none"
      },
    };
  },
  created() {
    this.component = this.drawerComponent;
    const style = this.component.componentAttrs.style;

    this.componentStyle.fontSize = style.fontSize
      ? parseInt(style.fontSize)
      : 14;
    this.componentStyle.lineHeight = style.lineHeight || 1.5;
    this.componentStyle.letterSpacing =
      parseFloat(style.letterSpacing) * 2 || 0;
    this.componentStyle.color = style.color || "";
    this.componentStyle.background = style.background || "";
    this.componentStyle.textAlign = style.textAlign || 'left'
    this.componentStyle.fontWeight = style.fontWeight || 'normal'
    this.componentStyle.fontStyle = style.fontStyle || 'normal'
    this.componentStyle.textDecoration = style.textDecoration || 'none'
    

  },
  watch: {
    // 字体大小
    "componentStyle.fontSize": function (val) {
      this.setStyle("fontSize", val + "px");
    },
    //
    "componentStyle.background": function (val) {
      this.setStyle("background", val);
    },
    "componentStyle.color": function (val) {
      this.setStyle("color", val);
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
      this.setStyle("lineHeight", val);
    },
    // 文字间距
    setLetterSpacing(val) {
      this.setStyle("letterSpacing", val * 0.5 + "px");
    },
    // 文字对齐
    setTextAlign(val){
      this.componentStyle.textAlign = val
      this.setStyle("textAlign", val);
    },
    // 文字加粗
    setFontWeigh(){
      this.componentStyle.fontWeight = this.componentStyle.fontWeight === "bold" ? "normal" : "bold"
      this.setStyle("fontWeight", this.componentStyle.fontWeight);
    },
    setFontStyle(){
      this.componentStyle.fontStyle = this.componentStyle.fontStyle === "italic" ? "normal" : "italic"
      this.setStyle("fontStyle", this.componentStyle.fontStyle);
    },
    setTextDecoration(){
      this.componentStyle.textDecoration = this.componentStyle.textDecoration === "underline" ? "none" : "underline"
      this.setStyle("textDecoration", this.componentStyle.textDecoration);
    },
    setStyle(key, val) {
      this.$set(this.component.componentAttrs.style, key, val);
      this.saveComponent();
    },
  },
};
</script>

<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">
.align {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  i{
    width: 1px;
    height: 25px;
    background: #e8eaec;
  }

  span {
    cursor: pointer;
    padding: 5px;

    &.active{
      background: #57a3f3;
      color: #FFF;
      border-radius: 3px;
    }
  }
}
</style>