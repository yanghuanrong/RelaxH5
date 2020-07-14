const fileTemplates = 
`<template>
    <div>
        <%- code %>
    </div>
</template>

<script>
export default {

}
</script>
`
const button = `<van-button<%-attrs%> > <%=text%> </van-button>
`
const tag = `<van-tag<%-attrs%> > <%=text%> </van-tag>
`

export default {
    fileTemplates,
    button,
    tag
}
