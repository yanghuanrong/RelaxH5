<template>
  <div>
    <Tabs>
      <TabPane label="样式">
        <Form :label-width="80">
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
              <Button @click="fontSizeIncrease">A+</Button>
              <Button @click="fontSizeReduce">A-</Button>
            </ButtonGroup>
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
      component: {},
      componentStyle: {}
    };
  },
  created() {
    this.component = this.drawerComponent;
    this.fontSizeValue = this.component.componentAttrs.style.fontSize && parseInt(this.component.componentAttrs.style.fontSize )
  },
  watch: {
    fontSizeValue(val){
      this.$set(this.component.componentAttrs.style, 'fontSize',  val + 'px')
      this.saveComponent()
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
    // 文字大小
    fontSizeIncrease() {
      this.fontSizeValue += 2;
    },
    fontSizeReduce() {
      this.fontSizeValue -= 2;
      if (this.fontSizeValue <= 12) {
        this.fontSizeValue = 12;
      }
    },
  },
};
</script>