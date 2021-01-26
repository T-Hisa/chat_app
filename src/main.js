// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'
import '@aws-amplify/ui-vue'
Amplify.configure(awsconfig)

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
  components: { App },
  template: '<App/>'
})
