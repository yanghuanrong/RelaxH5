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

      const getDeepComponent = (pageComponent, fn) => {
        for(let i = 0; i<pageComponent.length; i++){
          const item = pageComponent[i]
          if(item.componentID === id){
            fn(item)
            return
          } else if( item.componentName === "nested-container" ) {
            item.componentAttrs.col.forEach(({children}) => {
              if(children.length){
                getDeepComponent(children, fn)
              }
            })
          }
        }
      }

      getDeepComponent(pageComponent, (component) => {
        this.commit('updateComponent', component)
      })

    },
    saveComponent({pageComponent}, component){
      
      const getDeepComponent = (pageComponent) => {
        for(let i = 0; i<pageComponent.length; i++){
          const item = pageComponent[i]
          if(item.componentID === component.componentID){
            pageComponent[i] = Object.assign(item, component)
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
    },


  },
  actions: {
  },
  modules: {
  }
})
