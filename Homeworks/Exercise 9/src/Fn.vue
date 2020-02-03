<template>
    <input type="text" readonly :value="fullname" @change="fullname()">
</template>

<script>
export default {
    props: ['firstname', 'lastname'],
    computed: {
        fullname() {
            return this.firstname + " " + this.lastname;
        }
    }
}
</script>