<template>
    
    <ul>
     
        <li v-for="item in forms" class="formlistclass">
           <router-link to="/threadlist">
                 <Card class="routerlinkclass" @click.native="selectForm(item)"><p>{{item.name}}</p></Card>
            </router-link>
        </li>
        
    </ul>
    
</template>

<script>
import store from '../store/index'
export default {
    name: 'formlist',
    props:{
       
    },
    methods:{
        selectForm(obj){
            obj.type = 'form'
            this.$store.commit('selected',obj)
            //刷新
            this.$store.commit('getThreadlist','1')
        }
    },


    data(){
        return {
            forms:[
                 {"name":"动漫","fid":"6"},
                 {"name":"游戏","fid":"4"},
                 {"name":"PC数码","fid":"51"},
                 {"name":"影视","fid":"48"},
                 {"name":"八卦体育","fid":"77"},
                 {"name":"外野","fid":"75"},
            ]
        }
    },
    created() {
       
    },
    beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
    next()
  }
}

</script>

<style>

    .formlistclass{
        width:100%;
        height:65px;
    }
    .routerlinkclass{
        width:100%;height:100%;
    }
</style>