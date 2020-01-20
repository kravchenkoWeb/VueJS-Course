"use strict";

document.addEventListener("DOMContentLoaded", function() {
    new Vue({
        el: "#app",
        data: {
            helloWorld: "Hello 1 world!"
        },
        methods: {
            changeTitle: function(event) {
                this.helloWorld = event.target.value;
            }
        }
    });
});