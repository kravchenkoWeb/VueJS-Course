<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComp = 'appQuote'">Quote</button>
                <button @click="selectedComp = 'appAuthor'">Author</button>
                <button @click="selectedComp = 'appNew'">New</button>
                {{selectedComp}}
               <!-- <app-quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p>A wonderful quote!</p>
               </app-quote> -->
               <keep-alive>
                   <component :is="selectedComp"><p>Default</p></component>
               </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './comoponents/Quote.vue'
    import Author from './comoponents/Author.vue'
    import New from './comoponents/New.vue'

    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComp: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
