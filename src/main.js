import Vue from 'vue'
import App from './App'
import router from './router'
import iconFont from 'foundation-icons/foundation-icons.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
