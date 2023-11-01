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
    <div class="transition ease-in-out duration-500 hover:bg-gray-100 border-solid border dark:border-0 relative rounded-lg w-64 h-64 flex-col justify-center items-center bg-white dark:bg-base dark:text-text text-center cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-4" :class="{ hidden : !showDiv, flex: showDiv}" @click="showDiv = false">
        <!-- Close button -->
        <div class="fill-[#9ca3af] dark:fill-text absolute top-2 left-2">    
            <svg class="fill-text" xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 24 24">
                <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <!-- Weather icon -->
        <img class="w-32" :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" alt="weather icon">

        <!-- Weather data -->
        <div class="flex flex-col">
            <p class="font-semibold text-2xl">{{ weatherData.name }}</p>
            <p class="font-light text-xl">{{ weatherData.sys.country }}</p>
            <p class="font-thin">{{ weatherData.main.temp }} °C</p>
        </div>
    </div>  
</template>
