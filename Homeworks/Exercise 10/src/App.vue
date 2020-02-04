<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div 
                style="width: 300px;height: 300px; border: 2px solid green;display: flex; align-items: center; justify-content: center;font-size: 20px;"
                v-mydir:click="'green'"><strong>Click me</strong></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'mydir': {
                bind(el, binding, vnode) {
                    el.addEventListener(binding.arg, function() {
                        el.style.backgroundColor = binding.value;
                    });
                }
            }
        }
    }
</script>

<style>
</style>
