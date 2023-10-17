<script lang="ts">
    export default {
        name: "WeatherItems",
        props: ["weatherData"]
    }
</script>

<template>
    <div class="weather-item">
        <h1>{{ weatherData.name }}</h1>
        <h2>{{ weatherData.sys.country  }}</h2>
        <h3>{{ weatherData.main.temp }}</h3>
    </div>  
</template>

<style scoped>
    .weather-item {
        background-color: white;
        text-align: center;
        border: 1px solid grey;
        padding: 10rem 20px 12.5px;
        border-radius: 10px;
        transition: 0.5s;
    }
    .weather-item:hover {
        background-color: lightgrey;
        color: darkslategrey;
        transition: 0.5s;
        cursor: default;
    }
</style>
