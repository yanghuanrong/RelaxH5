import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: [],
  },
  mutations: {
    updatePage(state, value) {
      console.log(value)
      state.page = value
    },
    checkedComponent({page}, id) {

      page.forEach((item) => {

        if(item.componentID === id){
          // console.log(item)
          // item.componentText = '123123'
        } else if( item.componentName === "nested-container" ) {
          console.log(item.componentAttrs.col)
        }

        // console.log(item.componentID === id)
      })
      // console.log(state)
      // console.log(id)
    }
  },
  actions: {
  },
  modules: {
  }
})
