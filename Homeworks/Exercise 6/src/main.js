import Vue from 'vue'
import App from './App.vue'
import Heading from './Heading.vue'
import Footer from './Footer.vue'

Vue.component('status-heading', Heading);
Vue.component('status-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
