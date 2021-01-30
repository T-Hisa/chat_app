<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Sample Message</h1>
    <a href="#" @click="onClick">sample</a>
  </div>
</template>

<script>
import { DataStore } from '@aws-amplify/datastore'
import { Todo } from '../models'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log('Home')
  },
  methods: {
    async onClick () {
      try {
        await DataStore.save(
          new Todo({
            name: 'sampleName',
            description: 'description'
          })
        )
        console.log('SampleModel saved successfully')
      } catch (e) {
        console.log('Error', e)
      }
    }
  }
}
</script>
