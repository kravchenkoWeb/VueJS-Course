<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="navigateHome">Go home</button>
        <br><br><br>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    methods: {
        navigateHome() {
            this.$router.push({name: 'home'});
        }
    }
}
</script>