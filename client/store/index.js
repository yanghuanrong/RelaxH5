import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageComponent: [],
    eidtComponent: null,
  },
  mutations: {
    updatePage(state, value) {
      console.log(value)
      state.pageComponent = value
    },
    checkedComponent({pageComponent} , id) {

      const getDeepComponent = (pageComponent) => {
        for(let i = 0; i<pageComponent.length; i++){
          const item = pageComponent[i]
          if(item.componentID === id){
            this.commit('updateComponent', item)
            return
          } else if( item.componentName === "nested-container" ) {
            item.componentAttrs.col.forEach(({children}) => {
              if(children.length){
                getDeepComponent(children)
              }
            })
          }
        }
      }
      getDeepComponent(pageComponent)
      

    },
    updateComponent(state, component){
      if(component && component.componentName === "nested-container"){
        return
      }
      state.eidtComponent = component
    }
  },
  actions: {
  },
  modules: {
  }
})
