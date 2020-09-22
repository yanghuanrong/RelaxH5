<template>
  <div>
    <Tabs>
      <TabPane label="样式">
        <Collapse simple accordion>
          <Panel name="1">
            基础样式
            <div slot="content">
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
                      <DropdownItem
                        :name="item"
                        v-for="item in fontSizeList"
                        :key="item"
                      >{{ item+'px' }}</DropdownItem>
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
                  <span
                    class="x-icon x-icon-align-left"
                    :class="{active: componentStyle.textAlign === 'left'}"
                    @click="setTextAlign('left')"
                  ></span>
                </Tooltip>
                <Tooltip content="居中" placement="top">
                  <span
                    class="x-icon x-icon-align-center"
                    :class="{active: componentStyle.textAlign === 'center'}"
                    @click="setTextAlign('center')"
                  ></span>
                </Tooltip>
                <Tooltip content="居右" placement="top">
                  <span
                    class="x-icon x-icon-align-right"
                    :class="{active: componentStyle.textAlign === 'right'}"
                    @click="setTextAlign('right')"
                  ></span>
                </Tooltip>
                <Tooltip content="两端对齐" placement="top">
                  <span
                    class="x-icon x-icon-align-justify"
                    :class="{active: componentStyle.textAlign === 'justify'}"
                    @click="setTextAlign('justify')"
                  ></span>
                </Tooltip>
                <i></i>
                <Tooltip content="加粗" placement="top">
                  <span
                    class="x-icon x-icon-bold"
                    :class="{active: componentStyle.fontWeight === 'bold'}"
                    @click="setFontWeigh"
                  ></span>
                </Tooltip>
                <Tooltip content="倾斜" placement="top">
                  <span
                    class="x-icon x-icon-italic"
                    :class="{active: componentStyle.fontStyle === 'italic'}"
                    @click="setFontStyle"
                  ></span>
                </Tooltip>
                <Tooltip content="下划线" placement="top">
                  <span
                    class="x-icon x-icon-underline"
                    :class="{active: componentStyle.textDecoration === 'underline'}"
                    @click="setTextDecoration"
                  ></span>
                </Tooltip>
                <Tooltip content="清除" placement="top">
                  <span class="x-icon x-icon-trash"></span>
                </Tooltip>
              </div>
            </div>
          </Panel>

          <Panel name="2">
            边框
            <div slot="content">
              <Form :label-width="80">
                <FormItem label="边框样式">
                    <Select v-model="borderStyle.style">
                        <Option value="none">无</Option>
                        <Option value="solid">实线</Option>
                        <Option value="dotted">点线</Option>
                        <Option value="dashed">虚线</Option>
                        <Option value="double">双线</Option>
                    </Select>
                </FormItem>
                <FormItem label="边框颜色">
                  <ColorPicker v-model="borderStyle.color" />
                </FormItem>
                <FormItem label="边框尺寸">
                  <Slider
                    v-model="borderStyle.width"
                    :min="0"
                    :max="20"
                    :step="1"
                    show-input
                  ></Slider>
                </FormItem>
                <FormItem label="边框弧度">
                  <Slider
                    v-model="borderStyle.radius"
                    :min="0"
                    :max="componentStyle.height / 2"
                    :step="1"
                    :title="'请输入有效值，最接近的有效值为' + componentStyle.height / 2 "
                    show-input
                  ></Slider>
                </FormItem>
              </Form>
            </div>
          </Panel>
        </Collapse>
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
      borderStyle: {
        style: "",
        color: "",
        width: 0,
        radius: 0,
      },
      element: null,
      componentStyle: {
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: 0,
        color: "",
        background: "",
        textAlign: "left",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        width: "",
        height: "",
      },
    };
  },
  created() {
    this.component = this.drawerComponent;
    const style = this.component.componentAttrs.style;
    const element = this.element = document.querySelector(
      `[data-id="${this.component.componentID}"]`
    );
    this.componentStyle.width = element && element.offsetWidth
    this.componentStyle.height = element && element.offsetHeight

    this.componentStyle.fontSize = style.fontSize ? parseInt(style.fontSize) : 14;
    this.componentStyle.lineHeight = style.lineHeight || 1.5;
    this.componentStyle.letterSpacing =
      parseFloat(style.letterSpacing) * 2 || 0;
    this.componentStyle.color = style.color || "";
    this.componentStyle.background = style.background || "";
    this.componentStyle.textAlign = style.textAlign || "left";
    this.componentStyle.fontWeight = style.fontWeight || "normal";
    this.componentStyle.fontStyle = style.fontStyle || "normal";
    this.componentStyle.textDecoration = style.textDecoration || "none";

    this.borderStyle.style = style.borderStyle || ""
    this.borderStyle.color = style.borderColor || ""
    this.borderStyle.width = style.borderWidth ? parseFloat(style.borderWidth) : 0
    this.borderStyle.radius = style.borderRadius ? parseFloat(style.borderRadius) : 0

    console.log(this.componentStyle)
  },
  watch: {
    // 字体大小
    "componentStyle.fontSize": function (val) {
      this.setStyle("fontSize", val + "px");
    },
    //div背景色
    "componentStyle.background": function (val) {
      this.setStyle("background", val);
    },
    //文字颜色
    "componentStyle.color": function (val) {
      this.setStyle("color", val);
    },
    //边框样式
    "borderStyle.style": function(val){
      this.setStyle("borderStyle", val);
    },
     //边框宽度
    "borderStyle.width": function(val){
      this.componentStyle.height = this.element.offsetHeight
      this.setStyle("borderWidth", val + 'px');
    },
     //边框颜色
    "borderStyle.color": function(val){
      this.setStyle("borderColor", val);
    },
     //边框弧度
    "borderStyle.radius": function(val){
      this.setStyle("borderRadius", val + 'px');
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
    setTextAlign(val) {
      this.componentStyle.textAlign = val;
      this.setStyle("textAlign", val);
    },
    // 文字加粗
    setFontWeigh() {
      this.componentStyle.fontWeight =
        this.componentStyle.fontWeight === "bold" ? "normal" : "bold";
      this.setStyle("fontWeight", this.componentStyle.fontWeight);
    },
    setFontStyle() {
      this.componentStyle.fontStyle =
        this.componentStyle.fontStyle === "italic" ? "normal" : "italic";
      this.setStyle("fontStyle", this.componentStyle.fontStyle);
    },
    setTextDecoration() {
      this.componentStyle.textDecoration =
        this.componentStyle.textDecoration === "underline"
          ? "none"
          : "underline";
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

.ivu-collapse-content{
  padding:16px 0 0 0 !important;
}
.ivu-collapse-header{
  background: #eee;
}
.align {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  i {
    width: 1px;
    height: 25px;
    background: #e8eaec;
  }

  span {
    cursor: pointer;
    padding: 5px;

    &.active {
      background: #57a3f3;
      color: #fff;
      border-radius: 3px;
    }
  }
}
</style>