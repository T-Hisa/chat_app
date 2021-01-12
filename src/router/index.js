import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/containers/Home'
import Chat from '@/containers/Chat'
import Login from '@/containers/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/login',
      component: Home,
      children: [
        {
          path: '/chat',
          name: 'Chat',
          component: Chat
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    // {
    //   path: '/chat',
    //   name: 'Chat',
    //   component: Chat
    // },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // }
  ]
})
