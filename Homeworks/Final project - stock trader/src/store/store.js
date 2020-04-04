import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
        state: {
            funds: 10000,
            stocks: [
                {
                    name: 'Google',
                    price: 100,
                    buy: 0,
                    numberOf: 0
                },
                {
                    name: 'Amazon',
                    price: 120,
                    buy: 0,
                    numberOf: 0
                },
                {
                    name: 'Apple',
                    price: 95,
                    buy: 0,
                    numberOf: 0
                },
                {
                    name: 'Microsoft',
                    price: 91,
                    buy: 0,
                    numberOf: 0
                },
        ],
        portfolio: []
    },
    mutations: {
        addToPorfolio(state, item) {
            state.portfolio.push(item);
        }
    }
});