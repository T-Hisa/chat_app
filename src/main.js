// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import store from './stores/vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Amplify  from 'aws-amplify'
import { DataStore, syncExpression } from '@aws-amplify/datastore'
console.log('sync', syncExpression)
import { Todo } from './models'
import awsconfig from './aws/aws-exports'
// import datastoreConfig from './aws/aws-datastore-export'
import '@aws-amplify/ui-vue'
Amplify.configure(awsconfig)
// DataStore.configure(datastoreConfig)
console.log('environment', process.env)
// console.log('Vue prototype', Vue.prototype)
console.log('Amplify', Amplify)
console.log('Datastore from datastore', DataStore)
console.log('Todo', Todo)
console.log('Amplify Datastore', Amplify.DataStore)
console.log('Amplify datastore', Amplify.dataStore)
console.log('Amplify database', Amplify.database)
// Vue.prototype.database = Amplify.DataStore

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueI18n)

const messages = {
  ja: {

  }
}
let i18n = new VueI18n({
  locale: 'ja',
  messages: messages
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
