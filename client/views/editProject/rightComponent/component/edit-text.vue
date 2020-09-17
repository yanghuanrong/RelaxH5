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
              <Button>A+</Button>
              <Button>A-</Button>
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
      fontSizeValue: 15,
      component: {},
    };
  },
  created() {
    this.component = this.drawerComponent;
  },
  methods: {
    saveComponent() {
      this.$store.commit("saveComponent", this.component);
    },
    selectFontSize(val) {
      this.fontSizeValue = val;
      console.log(val);
    },
  },
};
</script>