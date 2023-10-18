<script lang="ts">
    export default {
        name: "WeatherItems",
        props: ["weatherData"],

        data() {
            return {
                mouseCoord: 0
            }
        },

        methods: {
            onMouseMove(event: MouseEvent) {
                this.mouseCoord = event.clientX;
            },
        }
    }
</script>

<template>
    <div class="weather-item" 
         @mousemove="onMouseMove">
        <h1>{{ weatherData.name }}</h1>
        <h2>{{ weatherData.sys.country }}</h2>
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
