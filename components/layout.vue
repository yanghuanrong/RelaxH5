<template>
  <div>
    <draggable
      :list="layoutDep"
      :options="{sort:false}"
      :group="{ name: 'layouts', pull: 'clone', put: false}"
    >
      <van-row v-bind="row.row" v-for="(row, i) in layoutDep" :key="'row' + i">
        <van-col v-bind="row.col" :span="item" v-for="(item, k) in row.col.span" :key="'col' + k"></van-col>
      </van-row>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Layout",
  components: {
    draggable
  },
  props: {
    layout: {
      type: Array,
      default: () => [],
      validator(row) {
        return row.some(item => {
          const span = item.col.span
            .split(":")
            .reduce((int, next) => ~~int + ~~next, 0);
          return span <= 24;
        });
      }
    }
  },
  computed: {
    layoutDep() {
      const data = [];
      this.layout.forEach(oldRow => {
        const row = {};
        for (const key in oldRow) {
          if (key !== "col") {
            row[key] = oldRow[key];
          }
        }

        const col = Object.assign({}, oldRow.col);
        col.span = oldRow.col.span.split(":");
        data.push({
          row,
          col
        });
      });

      return data;
    }
  }
};
</script>