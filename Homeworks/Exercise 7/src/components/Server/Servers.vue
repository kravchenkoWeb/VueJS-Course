<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <listItem :key="server" v-for="server in servers" :server="server"></listItem>
        </ul>
    </div>
</template>

<script>
    import listItem from './listItem.vue';

    export default {
        components: {
            'listItem': listItem
        },
        data: function() {
            return {
                servers: [
                    {
                        id: 1,
                        status: 'Critical'
                    },
                    {
                        id: 2,
                        status: 'Normal'
                    },
                    {
                        id: 3,
                        status: 'Unknown'
                    },
                    {
                        id: 4,
                        status: 'Critical'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>
