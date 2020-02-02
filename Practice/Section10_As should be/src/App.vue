<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid @quoteDeleted="deleteQuote" :quotes="quotes"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Infor: Click on box to delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuotesGrid from './components/QuotesGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';
    export default {
        data: function() {
            return {
                maxQuotes: 10,
                quotes: ['Just quote to see']
            }
        },
        components: {
            appQuoteGrid: QuotesGrid,
            appNewQuote: NewQuote,
            appHeader: Header 
        },
        methods: {
            newQuote(quote) {
                if(this.quotes.length >= this.maxQuotes) {
                    alert("Please delete quotes first");
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
