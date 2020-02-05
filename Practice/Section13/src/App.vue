<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | to-upper-case | to-lovercase }}</p>

                <hr>

                <input type="text" v-model="filteredText">

                <ul>
                    <li :key="fruit" v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <button @click="fruits.push('strowberry')">Add new</button>
                <app-list></app-list>

            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './filterMixin';

    export default {
        mixins: [fruitMixin],   
        data: function() {
            return {
                text: 'Hello there!'
            }
        },
        filters: {
            'to-upper-case'(value) {
                return value.toUpperCase();
            }
        },
        components: {
           'app-list': List 
        }
    }
</script>

<style>

</style>
