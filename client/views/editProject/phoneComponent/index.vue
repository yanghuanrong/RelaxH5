<template>
  <div class="phone-page">
    <div class="phone-wrap eidtor">
      <nestedDraggable :tasks="list" />
    </div>
  </div>
</template>

<script>
import nestedDraggable from "./element";

export default {
  components: {
    nestedDraggable
  },
  data() {
    return {
      list: [
        {
          name: "布局 1",
          componentName: "Iflex",
          col: [
            {
              span: 24,
              children: []
            }
          ]
        },
        {
          name: "布局 2:2",
          componentName: "Iflex",
          col: [
            {
              span: 12,
              children: []
            },
            {
              span: 12,
              children: []
            }
          ]
        },
        {
          name: "布局 3:3:3",
          componentName: "Iflex",
          col: [
            {
              span: 8,
              children: []
            },
            {
              span: 8,
              children: []
            },
            {
              span: 8,
              children: []
            }
          ]
        }
      ]
    };
  },
  watch: {
    list: function(value) {
      console.log(value);
    }
  }
};
</script>