<template>
  <div id="app">
    <top-view
      v-bind:is-user-signin="isUserSignin"
      v-bind:is-path-signin="isPathSignin"
    />
    <router-view
      @user-login="userLogin"
    />
  </div>
</template>

<script>
// import Sidebar from '@/components/Sidebar'
import TopView from '@/components/Top'

export default {
  name: 'App',
  data () {
    return {
      isUserSignin: false,
      isPathSignin: false
    }
  },
  created () {
  },
  mounted () {
    console.log('mounted in App')
    this.isPathSignin = this.$route.name === 'Signin'
  },
  updated () {
    this.isPathSignin = this.$route.name === 'Signin'
    console.log('update in App')
  },
  components: {
    // Sidebar,
    TopView
  },
  methods: {
    userLogin () {
      this.isUserSignin = true
      console.log('userLogin!!!')
    }
  }
}

</script>
<style>
@import "./assets/scss/style.scss";
</style>
