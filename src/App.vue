<template>
  <div id="app">
    <top-view
      v-bind:is-user-login="isUserLogin"
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
      isUserLogin: false
    }
  },
  components: {
    // Sidebar,
    TopView
  },
  methods: {
    userLogin () {
      this.isUserLogin = true
      console.log('userLogin!!!')
    }
  }
}

</script>
<style>
@import "./assets/scss/style.scss";
</style>
