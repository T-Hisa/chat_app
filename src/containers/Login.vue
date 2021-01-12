<template>
  <div class="container">
    <form class="wrapper" action="">
      <div class="form-group">
        <label for="email">Eメール</label>
        <input class="form-control" id="email" type="text" v-model="email">
      </div>
      <div class="form-group">
        <label for="name">名前</label>
        <input class="form-control" id="name" type="text" v-model="name">
      </div>
      <input type="submit" v-on:click="clickSendBtn">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      name: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log('Login')
  },
  methods: {
    clickSendBtn () {
      console.log(this.email)
    }
  }
}
</script>
