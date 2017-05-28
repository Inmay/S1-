<template>
         
          <Card  >
                <div class="v_body">
                    <div class="avatar">
                          <p>{{thread_post.author}}</p>
                     </div>
                    <div>
                     <div v-html="testdiv" class="content">  </div>
                     </div>
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
    .v_body{
        
        display:flex;
        width:100%;
    }
    .avatar{
        flex:0 0 80px;
        height:25px;
    }
    .content{
        flex:1;
        text-align:left;
        margin:10px 7px 17px 3px;

    }
</style>