import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/containers/Home'
import Chat from '@/containers/Chat'
import Signin from '@/containers/Signin'
import Signup from '@/containers/Signup'
import Wait from '@/containers/Wait'
// var aws = require('aws-sdk')
// console.log(aws)

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
        }
      ]
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/wait',
      name: 'Wait',
      component: Wait
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
