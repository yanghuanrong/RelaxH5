import Container from './container'
import NestedContainer from './nested-container'
import EditButton from './edit-button'
import EditTag from './edit-tag'

const components = {
    Container,
    NestedContainer,
    EditButton,
    EditTag
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