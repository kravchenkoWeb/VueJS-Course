<template>
    <div class="container">
        <status-heading></status-heading>
        <hr>
        <div class="row">
            <app-servers-list></app-servers-list>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <status-footer></status-footer>
    </div>
</template>

<script>
    import ServersList from './ServersList.vue'
    import ServersDetails from './ServerDetails.vue'

    export default {
        components: {
            'app-servers-list': ServersList,
            'app-server-details': ServersDetails
        }
    }
</script>

<style>

</style>
