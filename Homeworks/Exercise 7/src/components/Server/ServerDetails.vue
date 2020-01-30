<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select server</p>
        <p v-else>#{{server.id}} status: {{server.status}}  <button @click="normalize()">Change status</button></p>
        
    </div>

</template>

<script>
    import {serverBus} from '../../main';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            normalize() {
                this.server.status = 'Normal';
            }
        },
        created() {
            serverBus.$on('selectedServer', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style>

</style>
