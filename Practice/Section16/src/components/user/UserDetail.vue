<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded, his ID: {{ $route.params.id }}</p>
        <router-link tag="button" class="btn btn-primary" :to="link">Edit User Here</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: 'userEdit', 
                params: {
                    id: this.$route.params.id
                }, 
                query: {
                    locale: 'en', 
                    q: 100
                },
                hash: '#someData'
            }
        }
    }
}
</script>