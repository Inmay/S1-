<template>
   
    <Card style="width:100%" @click.native="selectPost">
        <div style="text-align:left" >
            <h3>{{forum_thread.subject}}</h3>
            <h6>{{forum_thread.author}}</h6>
        </div>
    </Card>
</template>

<script>

export default {
    name: 'threadcard',
    props:{
       forum_thread:{type:Object}
    },
    methods:{
        selectPost(){
            // console.log(this.forum_thread.tid)
            let obj = {'type':'thread','name':this.forum_thread.subject,'tid':this.forum_thread.tid}
            this.$store.commit('selected',obj)
            this.$store.commit('getPostlist','1')
            this.$router.push({ path: '/posts'})
        }
    },
    data(){
        return {
            
        }
    },
    created() {
       
    }
}

</script>

<style>

</style>