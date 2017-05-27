<template>
  <div id="app">  
     
     <Breadcrumb class="headertop">
        <Breadcrumb-item href="/" @click.native="clearName">
            <Icon type="ios-home-outline"></Icon> 首页
        </Breadcrumb-item>
        <Breadcrumb-item @click.native="clearPostName" v-show="selectedFormComponents.length > 0" >
            <Icon type="social-buffer-outline"></Icon> {{selectedFormComponents}}
        </Breadcrumb-item>
        <Breadcrumb-item v-show="selectedPostComponents.length > 0" >
            <Icon type="social-buffer-outline"></Icon> {{selectedPostComponents}}
        </Breadcrumb-item>
        
    </Breadcrumb>

     <transition name="slide">
           <keep-alive><router-view></router-view></keep-alive>
    </transition>
  </div>
</template>

<script>
import store from './store/index'
import formlist from './components/formlist'


export default {
//<router-view></router-view>
  name: 'app',
  components:{formlist},
  data(){
    return {
                
            }
  },
  methods:{
    clearName(){
      this.$store.commit('clearName')
    },
    clearPostName(){
      this.$store.commit('clearThreadName')
      this.$router.push({ path: '/threadlist'})
    }
  },
  created() {
    
    // var testurl = '&module=forumdisplay&fid=4&page=1&tpp=50';
    
    // this.$axios({
    //   url:'/s1api'+testurl,
    //   method:'GET',
    // }).then(response => {
       
    // })
  },
  computed: {
    selectedFormComponents() {
        return this.$store.state.selectedForm.name != null ? this.$store.state.selectedForm.name : ''
    },
    selectedPostComponents() {
        return this.$store.state.selectedThread.name != null ? this.$store.state.selectedThread.name : ''
    }
}
 
}

  

</script>

<style>
  .headertop{
    height:30px;
  }
</style>
