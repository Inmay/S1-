import Vuex from 'vuex'
import Vue from 'vue'

import * as actions from './actions'
import axios from 'axios'


Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules:{
        
    },
    state:{
        selectedForm:{type:Object},
        selectedThread:{ type:Object},
        threadlist:{type:Object},
        postlist:{type:Object},
    },
    mutations:{
        selected(state,obj) {
            if(obj.type == 'form') {
                state.selectedForm = obj
            }else if(obj.type == 'thread') {
                state.selectedThread = obj
            }
        },
        clearName(state) {
            state.selectedForm = {}
            state.selectedThread = {}
        },
        clearThreadName(state) {
            state.selectedThread = {}
        },


        getThreadlist(state,page) {     
             let tempurl = '&module=forumdisplay&tpp=50&fid='+state.selectedForm.fid+'&page='+page;

             axios({
                url:'/s1api'+tempurl,
                method:'GET',
            }).then(response => {
                
                state.threadlist = response.data.Variables.forum_threadlist
            }).catch(error => {
                state.threadlist = {'error':'-1'}
            })
        },
        getPostlist(state,page) {     
            // console.log(state.selectedThread.tid)
             let tempurl = '&module=viewthread&ppp=30&tid='+state.selectedThread.tid+'&page='+page;
             axios({
                url:'/s1api'+tempurl,
                method:'GET',
            }).then(response => {
                
                state.postlist = response.data.Variables.postlist
            }).catch(error => {
                state.postlist = {'error':'-1'}
            })
        }
    }
})