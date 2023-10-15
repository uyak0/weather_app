<script lang="ts">
import WeatherItems from './WeatherItems.vue';

export default {
    name: "WeatherData",
    components: {
        WeatherItems
    },
    props: ["weatherData"]
}
</script>

<template>
    <div>
        <div>
            <WeatherItems :data="weatherData" />
        </div>
    </div>
</template>
