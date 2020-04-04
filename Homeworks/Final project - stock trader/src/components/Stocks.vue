<template>
    <section class="stocks">
        <div class="row">
            <div class="col-md-12">
                <h1>Stocks</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="stock in stocks" :key="stock.name">
                <div class="stock" >
                    <div class="row">
                        <div class="col-md-6" style="text-align: center;">
                            <h2>{{stock.name}}</h2>
                        </div>
                        <div class="col-md-6" style="text-align: center;">
                            <h3>$ {{stock.price}}</h3>
                        </div>
                    </div>
                    <input type="number" min="0" v-model="stock.buy" placeholder="How much stocks do you wanna buy? ">
                    <button class="buy" @click="addToPorfolio(stock)">Buy Stocks</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    computed: {
        stocks() {
            return this.$store.state.stocks;
        }
    },
    methods: {
        ...mapMutations([
            'addToPorfolio'
        ])
    }
}
</script>

<style scoped>
    .stocks {
        padding: 0 10px;
    }
    .stock {
        padding: 10px;
        background: #ccc;
        margin-bottom: 30px;
    }

    h2 {
        text-align: center;
        font-size: 18px;
    }
    input {
        width: 100%;
        height: 32px;
        font-size: 14px;
        text-align: center;
    }
    .buy {
        width: 100%;
        border: none;
        background-color: aqua;
    }
</style>