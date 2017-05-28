<template>
    <div>
        <div class="control">
            <Button type="info" class="controltool" @click.native="toBack"><p style="padding-top:-3px"><</p></Button>
            <p class="page">{{readpage}}</p>
            <Button type="info" class="controltool" @click.native="toFront"><p style="padding-top:-3px">></p></Button>
            
        </div>
    <ul>
       <li v-for="item in postlist">
        <postcard :thread_post="item"></postcard>
       </li>
       
    </ul>
    </div>
</template>

<script>
import postcard from './postcard'

export default {
    
    name: 'posts',
    components:{postcard},
    methods:{
        toBack(){
            if(this.$store.state.readpage > 1) {
                this.$store.commit('getPostlist',this.$store.state.readpage-1)
            }else{
                
                this.$Message.warning('这是第一页');
            
            }
        },
        toFront(){
            if(this.$store.state.postlist.length >= 30) {
                this.$store.commit('getPostlist',this.$store.state.readpage+1)
            }else{
                this.$Message.warning('没有更多页了!');
            }
        }
    },
    props:{
       
    },
    data(){
        return {
            
        }
    },
    created() {
       
    },
    computed: {
        postlist(){
            return this.$store.state.postlist
        },
        readpage(){
            return this.$store.state.readpage
        }
    }
}

</script>

<style>
    .control{

        position:absolute;
        top:3px;
        right:30px;
    }
    .controltool{
        display:inline;
        width:35px;height:25px;
        line-height:25px;
        
    }
    .page{
        display:inline;
    }

</style>