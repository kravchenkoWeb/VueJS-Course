<template>
   <div class="form-wrap">
       <form>
           <textarea cols="30" rows="5" @keydown.enter="addQuote" placeholder="Type your quote here" v-model="usersQuote"></textarea>
            <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
       </form>
   </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        data: function() {
            return {
                usersQuote: ''
            }
        },
        methods: {
            addQuote() {
                if(this.usersQuote) {
                    eventBus.$emit('quoteAdded', this.usersQuote);
                    this.usersQuote = "";
                }
            }
        }
    }
</script>

<style scoped>
    .form-wrap {
        text-align: center;
        margin-top: 50px;
    }
    .form-wrap textarea {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        display: block;
        box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.28);
        padding: 20px 15px;
        font-size: 20px;
        margin-bottom: 20px;
    }
    .btn {
        font-size: 20px;
    }
</style>
