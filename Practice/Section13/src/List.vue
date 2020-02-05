<template>
                
    <div>
        <input type="text" v-model="filteredText">

        <ul>
            <li :key="fruit" v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>

</template>

<script>
    import { fruitMixin } from './filterMixin';

    export default {
        mixins: [fruitMixin],
        created() {
            console.log('Created in List.vue');
        }    
    }
</script>

<style>

</style>
