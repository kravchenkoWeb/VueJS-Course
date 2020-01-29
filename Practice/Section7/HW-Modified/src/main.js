import Vue from 'vue'
import App from './App.vue'
import Heading from './components/Heading.vue'
import Footer from './components/Footer.vue'

Vue.component('status-heading', Heading);
Vue.component('status-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
