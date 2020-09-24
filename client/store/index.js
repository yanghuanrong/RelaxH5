import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDeepComponent = (pageComponent, id, callback) => {
  for(let i = 0; i<pageComponent.length; i++){
    const item = pageComponent[i]
    if(item.componentID === id){
      callback(item)
      return
    } else if( item.componentName === "nested-container" ) {
      item.componentAttrs.col.forEach(({children}) => {
        if(children.length){
          getDeepComponent(children, id, callback)
        }
      })
    }
  }
}

export default new Vuex.Store({
  state: {
    pageComponent: [],
    eidtComponent: null,
  },
  mutations: {
    updatePage(state, value) {
      state.pageComponent = value
    },
    checkedComponent({pageComponent} , id) {
      getDeepComponent(pageComponent, id, (component) => {
        this.commit('updateComponent', component)
      })
    },
    saveComponent({pageComponent}, component){
      getDeepComponent(pageComponent, component.componentID, (oldComponent) => {
        oldComponent = Object.assign(oldComponent, component)
        Vue.set(oldComponent, 'componentAttrs', component.componentAttrs)
      })

    },
    updateComponent(state, component){
      if(component && component.componentName === "nested-container"){
        return
      }
      state.eidtComponent = component
    },
    checkedFile(state, file){
      console.log(file.length)
      if(!file.length) return
      state.pageComponent = file[0].content
      console.log(state.pageComponent)
    }
  },
  actions: {
  },
  modules: {
  }
})
