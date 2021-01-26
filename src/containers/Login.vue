<template>
  <div class="container">
    <form class="wrapper" method="POST" action="">
      <div class="form-group">
        <label for="name">名前</label>
        <input class="form-control" id="name" type="text" v-model="name">
      </div>
      <div class="form-group">
        <label for="email">Eメール</label>
        <input class="form-control" id="email" type="text" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input class="form-control" id="password" type="password" v-model="password">
      </div>
      <input type="submit" v-on:click="onClickSignUp">
    </form>
    <amplify-sign-up></amplify-sign-up>
  </div>
</template>

<script>

import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth } from 'aws-amplify'

export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      name: '',
      password: '',
      msg: 'Welcome to Your Vue.js App',
      user: Object,
      authState: Object
    }
  },
  created () {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState
      this.user = authData
    })
  },
  mounted () {
    console.log('Login')
    console.log(this)
  },
  methods: {
    onClickSendBtn (e) {
      e.preventDefault()
      console.log(this.email)
      console.log(this.name)
      console.log(this.password)
    },
    async onClickSignUp (e) {
      e.preventDefault()
      try {
        const { user } = await Auth.signUp({
          username: this.name,
          password: this.password,
          attributes: {
            email: this.email
          }
        })
        console.log(user)
      } catch (e) {
        console.log('error', e)
      }
    }
  }
}
</script>
