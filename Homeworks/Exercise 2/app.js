new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            aletMe: function() {
                alert("Was clicked");
            },
            updateData: function(event) {
                this.value = event.target.value;
            }
        }
    });