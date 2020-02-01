<template>
    <div class="quotes-progress">
        <h1>Quotes added</h1>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="{width: (progressVal.length * 10) + '%'}" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{{progressVal.length}} of 10 </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            progressVal: Array
        }
    }
</script>
