new Vue({
  el: '#exercise',
  data: {
    shrinkHighlight: false,
    ownClass: 'ownClass',
    notOwnClass: 'notownClass',
    usersClass: '',
    typableClass: '',
    allowed: '',
    usersColor: "#000",
    progressWidth: 0
  },
  methods: {
    startEffect: function() {
      let vm = this;
      setInterval(function() {
        vm.shrinkHighlight = !vm.shrinkHighlight;
      }, 3000);
    },
    startProgress: function() {
      let vm = this;
      vm.progressWidth = 0;
      let myInterval = setInterval(function() {
        vm.progressWidth++;
        if(vm.progressWidth >= 100) {
          clearInterval(myInterval);
        }
      }, 10);
    }
  }
});
