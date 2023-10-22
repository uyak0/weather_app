<script lang="ts">
    export default {
        name: "WeatherItems",
        props: ["weatherData"],
    }
</script>

<template>
    <div class="weather-item hover:scale-125" >
        <p class="font-semibold text-2xl">{{ weatherData.name }}</p>
        <p class="font-light text-xl">{{ weatherData.sys.country }}</p>
        <p class="font-thin">{{ weatherData.main.temp }} °C</p>
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
