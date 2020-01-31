<template>
    <div>  
       <h2>Author</h2> 
    </div> 
</template>

<script>
    export default {
        destroyed() {
            console.log("Destroyed!");
        },
        deactivated() {
            console.log("Away!");     
        },
        activated() {
            console.log("Here!");
        }
    }
</script>

<style scoped>

</style>