<script lang="ts">
    export default {
        name: "WeatherItems",
        props: ["weatherData"],
        data() {
            return {
                showDiv: true 
            }
        },

        methods: {
        }
    }
</script>

<template>
    <div class="weather-item relative rounded-lg w-64 h-64 pt-20 flex-col justify-center items-center bg-white text-center cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-4" :class="{ hidden : !showDiv, flex: showDiv}" @click="showDiv = false">
        <!-- Close button -->
        <div class="absolute top-2 left-2">    
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 24 24" fill="#9ca3af">
                <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <p class="font-semibold text-2xl">{{ weatherData.name }}</p>
        <p class="font-light text-xl">{{ weatherData.sys.country }}</p>
        <p class="font-thin">{{ weatherData.main.temp }} °C</p>
    </div>  
</template>

<style scoped>
    .weather-item {
        border: 1px solid grey;
        transition: 0.5s;
    }
    .weather-item:hover {
        background-color: lightgrey;
        color: darkslategrey;
        transition: 0.5s;
    }
</style>
