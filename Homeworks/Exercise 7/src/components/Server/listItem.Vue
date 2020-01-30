<template>
    <li @click="transport()" class='list-group-item' >Server #{{server.id}} it's status is: {{server.status}} </li>
</template>

<script>
    import {serverBus} from '../../main';

    export default {
        props: ['server'],
        methods: {
            transport() {
                serverBus.$emit('selectedServer', this.server);
            }
        },
        created() {
            serverBus.$on('statusNormal', (newStatus) => {
                server.status = newStatus;
            });
        }
    }
</script>