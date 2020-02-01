<template>
    <div class="container">
        <app-progress :progressVal="quotes"></app-progress>
        <app-input></app-input>
        <div class="quotes-wrapper">
            <div class="row">
                <app-quote :key="quote" :progressVal="quotes" v-for="quote in quotes"><p>{{quote}}</p></app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import userInput from './components/Input.vue';
    import Quote from './components/Quote.vue';
    import {eventBus} from './main';

    export default {
       components: {
           'app-input': userInput,
           'app-quote': Quote
       }, 
       data: function() {
           return {
               quotes: ['This is example of quote', 'And 1 more just to be sure']
           }
       },
       created() {
           eventBus.$on("quoteAdded", (quote) => {
               if(this.quotes.length < 10) {
                   this.quotes.push(quote);
               } else {
                   alert("Too much of quotes! Delete one.");
               }
           });
       } 
    }
</script>

<style>
.quotes-wrapper {
    margin-top: 50px;
}
</style>
