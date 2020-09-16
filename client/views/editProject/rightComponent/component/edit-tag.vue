<template>
  <div>
    <p>
      <Input addon-before="文本值" v-model="component.componentText" @blur="saveComponent" />
    </p>
  </div>
</template>

<script>
export default {
  name: "editTag",
  props: {
    drawerComponent: Object
  },
  data() {
    return {
      component: {}
    };
  },
  created() {
    this.component = this.drawerComponent;
  },
  methods: {
    saveComponent() {
      this.$store.commit("saveComponent", this.component);
    }
  }
};
</script>