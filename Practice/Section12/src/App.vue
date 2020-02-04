<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p> 
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-hilight:background.delayed="'aqua'">Color me</p>
                <p v-local-hilight:background.delayed="'aqua'">Color me too</p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-hilight': {
                bind(el, binding, vnode) {
                    // el.style.backgroundColor = 'green';
                    // el.style.backgroundColor = binding.value;
                    var delay = 0;
                    if(binding.modifiers['delayed']) {
                    delay = 3000;
                    }
                    setTimeout(() => {
                    if(binding.arg == 'background') {
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color = binding.value;
                    }
                    }, delay);
                }
            }
        }
    }
</script>

<style>

</style>
