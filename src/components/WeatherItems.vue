<script lang="ts">
    export default {
        name: "WeatherItems",
        props: ["weatherData"],
    }
</script>

<template>
    <div class="weather-item" >
        <h1 style="font-weight: 600">{{ weatherData.name }}</h1>
        <h2 style="font-weight: 250">{{ weatherData.sys.country }}</h2>
        <h3 style="font-weight: 100">{{ weatherData.main.temp }} °C</h3>
    </div>  
</template>

<style scoped>
    .weather-item {
        width: 250px;
        height: 310px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: white;
        text-align: center;
        border: 1px solid grey;
        padding: 10rem 20px 12.5px;
        border-radius: 10px;
        transition: 0.5s;
        box-shadow: 10px 10px 10px rgba(201, 201, 201, 0.6);
    }
    .weather-item:hover {
        background-color: lightgrey;
        color: darkslategrey;
        transition: 0.5s;
        cursor: default;
        box-shadow: none;
    }
</style>
