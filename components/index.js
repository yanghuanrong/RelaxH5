import Container from './container'
import NestedContainer from './nested-container'

const components = {
    Container,
    NestedContainer,
}

const install = (Vue) => {
    Object.keys(components).map((key) => {
        const component = components[key]
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const comp = {
    install
}

Object.keys(components).map((key) => {
    const component = components[key]
    comp[component.name] = component
})

export default comp