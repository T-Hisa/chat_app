<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Sample Message</h1>
    <a href="#" @click="onClick"></a>
  </div>
</template>

<script>
import { DataStore } from '@aws-amplify/datastore'
import { Todo } from '../models'


export default {
  name: 'Chat',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log('Chat')
  },
  methods: {
    async onClick () {
      try {
        await DataStore.save(
          new Todo({
            id: 0
          })
        );
        console.log('SampleModel saved successfully')
      } catch (e) {
        console.log('Error', e)
      }
    }
  }
}
</script>
