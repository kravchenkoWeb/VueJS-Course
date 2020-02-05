import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lovercase', function(value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('Created in main.js');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
