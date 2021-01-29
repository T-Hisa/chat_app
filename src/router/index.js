import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/containers/Container'
import Home from '@/containers/Home'
import Signin from '@/containers/Signin'
import Signup from '@/containers/Signup'
import Wait from '@/containers/Wait'
// import Err from '@/containers/Error'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      redirect: '/signin',
      component: Container,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
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
    },
    {
      path: '*',
      redirect: '/home'
    }
    // {
    //   path: '*',
    //   name: 'Error',
    //   component: Err
    // }
  ]
})

router.beforeEach((to, from, next) => {
  console.log({to})
  console.log({from})
  // if ('true') {
  //   next()
  // } else {
  //   next({path: '/signin'})
  // }
  next()
  // console.log({})
})

export default router
