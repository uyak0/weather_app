<script lang="ts">
    export default {
        name: "WeatherItems",
        props: ["weatherData"]
    }
</script>

<template>
    <div class="weather-item">
        <h1>{{ weatherData.name }}</h1>
        <h3>{{ weatherData.main.temp }}</h3>
    </div>  
</template>

<style scoped>
    .weather-item {
        border: 1px solid grey;
        padding: 10px;
        border-radius: 10px;
    }
    .weather-item:hover {
        background-color: lightgrey;
    }
</style>
