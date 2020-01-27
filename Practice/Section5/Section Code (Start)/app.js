var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

Vue.component('hello', {
  template: '<h1>Hello</h1>'
});

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.textContent = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

console.log(vm1.$data === data);
// vm1.$refs.heading.innerText = 'Before the update';

setTimeout(function() {
  vm1.title = 'Changed by timer';
  vm1.show();
}, 3000);

vm1.newProp = 'NEW!';
console.log(vm1);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'Second VueJS Instance',
  },
  methods: {
    updatedTitle: function() {
      vm1.title = "Changed by vm2";
    }
  }
});

var vm3 = new Vue({
  template: '<h1>Hello</h1>'
});

vm3.$mount();
document.getElementById("app3").appendChild(vm3.$el);