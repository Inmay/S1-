import Vue from 'vue'
import Router from 'vue-router'
import formlist from '@/components/formlist'
import threadlist from '@/components/threadlist'
import posts from '@/components/posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'formlist',
      component: formlist
    },
     {
      path: '/threadlist',
      name: 'threadlist',
      component: threadlist
    },
    {
      path: '/posts',
      name: 'posts',
      component: posts
    },
  ]
})
