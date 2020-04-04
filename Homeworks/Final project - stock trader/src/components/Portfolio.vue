<template>
    <section class="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Portfolio</h1>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-4" v-for="item in portfolio" :key="item.name">
                    <div class="portfolio-item">
                        <div class="item-name">
                            <span>{{item.name}}</span>
                        </div>
                        <div class="stocks-number">
                            <span>{{item.numberOf}}</span>
                        </div>
                        <button>Sell</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        portfolio() {
            return this.$store.state.portfolio;
        }
    }
}
</script>

<style scoped>
    .portfolio-item {
        margin: 20px 0;
    }
    .item-name {
        background-color: #5d86c3;
        text-align: center;
        padding: 20px 0;
    }
    .item-name span {
        color: #fff;
        font-size: 18px;
    }
    .stocks-number {
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        background-color: #c0d8fb;
    }
    .portfolio-item button {
        display: block;
        padding: 13px 0;
        font-size: 22px;
        background-color: #d45ad6;
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
    }
</style>