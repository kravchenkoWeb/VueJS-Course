document.addEventListener("DOMContentLoaded", function() {
    new Vue({
        el: "#exercise",
        data: {
            name: 'Vitaliy',
            age: 23,
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
        },
        methods: {
            randomNumber: function() {
                return Math.random();
            }
        }
    });
});