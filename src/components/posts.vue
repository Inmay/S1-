<template>
    <ul>
       <li v-for="item in postlist">
        <postcard :thread_post="item"></postcard>
       </li>
    </ul>
</template>

<script>
import postcard from './postcard'

export default {
    
    name: 'posts',
    components:{postcard},
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
        }
    }
}

</script>

<style>

</style>