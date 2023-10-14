<script lang="ts">
    export default {
        props: ['name', 'temp']
    }

</script>

<template>
    <div class="container">
        <h1>{{ name }}</h1>
        <h2>{{ temp }}</h2>
    </div>  
</template>

<style scoped>
    .container {
        border: 1px solid grey;
        padding: 10px;
        border-radius: 10px;
    }
    .container:hover {
        background-color: lightgrey;
    }
</style>
