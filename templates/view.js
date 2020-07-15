const fileTemplates = 
`<template>
    <div>
        <%_ element.forEach(function(item){ _%>
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
const row =
`<van-row<%-attrs%> >
        <%_ element.forEach(function(item){ _%>
        <%- item %>
        <%_ }); _%>
        </van-row>`

const col = 
`   <van-col<%-attrs%> >
        <%_ element.forEach(function(item){ _%>
            <%- item %>
        <%_ }); _%>
        </van-col>`

export default {
    fileTemplates,
    button,
    tag,
    row,
    col
}
