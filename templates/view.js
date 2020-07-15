const fileTemplates = 
`<template>
    <div>
        <%_ code.forEach(function(item){ _%>
        <%- item %>
        <%_ }); _%>
    </div>
</template>

<script>
export default {

}
</script>
`
const button = `<van-button<%-attrs%> ><%=text%></van-button>`
const tag = `<van-tag<%-attrs%> ><%=text%></van-tag>`

export default {
    fileTemplates,
    button,
    tag
}
