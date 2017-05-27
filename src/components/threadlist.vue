<template>
   <ul>
    <li v-for="item in threadlist">
        <threadcard :forum_thread="item"></threadcard>
    </li>
   </ul>
</template>

<script>

import threadcard from './threadcard'
import store from '../store/index'


export default {
    name: 'threadlist',
    components:{threadcard},
    props:{
       
    },
    data(){
        return {
            
        }
    },
    created() {
    //    本地文件
    //    let tempFormListJson = require('../../formlist')
    //    this.formlist = tempFormListJson.Variables.forum_threadlist


    //    this.$store.commit('getThreadlist','1')
    },
    computed: {
        threadlist(){
            return this.$store.state.threadlist
        }
    }
}

</script>

<style>

</style>