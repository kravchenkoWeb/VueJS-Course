<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{userAge}}</p>
        <button @click="updAge()">Set age</button>
    </div>
</template>

<script>
import {eventBus} from '../main';

export default {
    props: ['userAge'],
    methods: {
        updAge() {
            this.userAge = 28;
            // this.$emit("ageIsUpdated", this.userAge);
            eventBus.$emit("ageIsUpdated", this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
