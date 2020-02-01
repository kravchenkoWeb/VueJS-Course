import Vue from 'vue'
export const eventBus = new Vue();
import App from './App.vue'
import Bar from './components/Bar.vue'

Vue.component('app-progress', Bar);

new Vue({
  el: '#app',
  render: h => h(App)
})
