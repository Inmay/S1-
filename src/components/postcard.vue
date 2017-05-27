<template>
   
    <Card style="width:100%" >
        <div style="text-align:left" >
            <div v-html="testdiv"> 
               
            </div>
            <h6>{{thread_post.author}}</h6>
        </div>
    </Card>
</template>

<script>

export default {
    name: 'postcard',
    props:{
       thread_post:{type:Object}
    },
    data(){
        return {
            // testdiv: '<div>'+this.thread_post.message+'</div>'.replace(/[<>&"]/g,function(c){
                // return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]})
            testdiv:'<div>'+this.thread_post.message+'</div>'
        }
    },
    created() {
       
    }
}

</script>

<style>

</style>