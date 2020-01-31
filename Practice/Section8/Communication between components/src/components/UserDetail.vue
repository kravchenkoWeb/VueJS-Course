<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{swthichName()}}</p>
        <button @click="resetName()">Change name back</button>
        <button @click="newFn()">Change name in other way</button>
        <br><br>
        <p>Age: {{userAge}}</p>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        data: function() {
            return {
                
            }
        },
        props: {
            myName: {
                type: String
            },
            newFn: {
                type: Function
            },
            userAge: Number
        },
        methods: {
            swthichName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Vitaliy';
                this.$emit('nameWasChanged', this.myName);
            }
        },
        created() {
            eventBus.$on('ageIsUpdated', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
