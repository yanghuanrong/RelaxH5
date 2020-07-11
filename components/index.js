import Container from './container'

const components = {
    Container
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