<template>
  <div class="editor-toolbar__component">
    <div class="layout-wrap">
      <!-- 布局组件的使用 -->
      <div style="margin-bottom: 10px">布局组件</div>

         <draggable
            :list="list"
            :options="{sort:false}"
            :group="{ name: 'layouts', pull: 'clone', put: false}"
            :clone="cloneLayout"
          >
            <Container
              v-for="(item, i) in list"
              v-bind="item.componentAttrs"
              :key="'left-layout' + i"
              class="left-layout-grid"
            />
          </draggable>

      <!-- 可用的基础组件 -->

      <div style="margin-top: 15px; margin-bottom: 10px">基础组件</div>
      <draggable
        :list="component"
        :options="{sort:false}"
        :group="{ name: 'layouts', pull: 'clone', put: false}"
        :clone="cloneComponent"
         class="component_list" 
      >
        <template v-for="(item, i) in component">
          <dl :key="'component' + i">
            <dt></dt>
            <dd>{{item.componentTitle}}</dd>
          </dl>
          <!-- <component :key="'component' + i" :is="item.componentName" v-bind="item"></component> -->
        </template>


      </draggable>
    </div>

    <Drawer
      width="350"
      class="drawer"
      :maskStyle="{
        background: 'rgba(0,0,0, 0.2)'
      }"
      :closable="false"
      v-model="drawerVisible"
    >
      <component
        v-if="drawerComponent.componentName"
        :is="drawerComponent.componentEdit"
        :drawerComponent="drawerComponent"
      ></component>
    </Drawer>
  </div>
</template>


<script>
import draggable from "vuedraggable";
import components from "./staticComponent";
import editComponent from "./component"

export default {
  components: {
    draggable,
    ...editComponent
  },
  data() {
    return {
      list: components.layout,
      component: components.component,
      drawerComponent: {},
    };
  },
  computed: {
    drawerVisible: {
      get(){
        this.drawerComponent = Object.assign({}, this.$store.state.eidtComponent);
        return this.$store.state.eidtComponent ? true : false;
      },
      set(val){
        this.$store.commit("updateComponent", null);
      }
    },
  },
  methods: {
    cloneComponent(component) {
      const newComponent = JSON.parse(JSON.stringify(component));
      newComponent.componentID = Math.random().toString(16).substring(2, 15);
      return newComponent;
    },
    cloneLayout(container) {
      const newContainer = JSON.parse(JSON.stringify(container));
      delete newContainer.componentAttrs.row.gutter;
      newContainer.componentID = Math.random().toString(16).substring(2, 15);
      return newContainer;
    },
  },
};
</script>