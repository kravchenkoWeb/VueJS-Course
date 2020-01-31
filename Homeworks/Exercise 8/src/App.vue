<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedCmp = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedCmp = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedCmp = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedCmp">
                    <h2 slot="blue-content">It's blue!</h2>
                    <h2 slot="green-content">It's green!!</h2>
                    <h2 slot="red-content">It's red!</h2>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedCmp: 'appBlue'
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
    h2 {
        text-align: center;
        color: #fff;
    }
</style>
