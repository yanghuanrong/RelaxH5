import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: [],
    eidtComponent: null,
  },
  mutations: {
    updatePage(state, value) {
      console.log(value)
      state.page = value
    },
    checkedComponent({page} , id) {
      for(let i = 0; i<page.length; i++){
        const item = page[i]

        if(item.componentID === id){
          this.commit('updateComponent', item)
        } else if( item.componentName === "nested-container" ) {
          console.log(item.componentName)
          console.log(item.componentAttrs.col)
        }
      }

    },
    updateComponent(state, component){
      state.eidtComponent = component
      // console.log(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
