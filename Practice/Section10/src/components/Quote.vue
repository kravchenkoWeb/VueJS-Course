<template>
    <div class="col-md-3">
        <div class="quote" @click="removeCurrent($event)">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        props: {
            progressVal: Array
        },
        methods: {
            removeCurrent(event) {
                this.progressVal.splice(event.target, 1)
            }
        }
    }
</script>

<style scoped>
    .quote {
        box-shadow: 1px 2px 10px #666;
        text-align: center;
        padding: 20px;
        margin: 10px 0;
        transition: all .8s ease;
        cursor: pointer;
    }
    .quote:hover {
        background-color: rgba(255, 0, 0, 0.12);
    }
    .quote p {
        font-size: 22px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-style: italic;
    }
</style>