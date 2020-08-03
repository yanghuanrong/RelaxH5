<template>
  <div>
    <p>
      <a-input addon-before="文本值" v-model="component.componentText" @blur="saveComponent" />
    </p>
  </div>
</template>

<script>
export default {
  name: "editvan-tag",
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