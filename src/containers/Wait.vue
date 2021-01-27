<template>
  <div class="container">
    <div class="wrapper">
      <p>※ 管理者の認証を待っています。しばらくお待ちください。</p>
      <p>承認されたらメールに通知いたします。</p>
      <p>
        <router-link  outer-link to='/signin'>Sign in 画面へ</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Wait',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      msg: 'Welcome to Your Vue.js App',
      user: Object,
      authState: Object
    }
  },
  created () {
    console.log(this.authState)
    console.log(this.user)
  },
  mounted () {
    console.log('Login')
    console.log(this)
  },
  methods: {
    async onClickSignIn (e) {
      e.preventDefault()
      try {
        console.log(this.name)
        console.log(this.email)
        console.log(this.password)
        let username = this.name
        let password = this.password
        const user = await Auth.signIn(username, password)
        this.user = user
        console.log(user)
      } catch (e) {
        console.log('error', e)
      }
    }
  }
}
</script>
<style>
</style>
