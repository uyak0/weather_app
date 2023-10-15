<script lang="ts">
  import WeatherData from './components/WeatherData.vue';
  import axios from 'axios';

  export default {
    name: 'app',
    components: {
      WeatherData
    },

    data() {
      return {
        weatherData: []
      }
    },

    created() {
      // console.log('App mounted');
      axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=199b2efcae35ce7c093a0c456250f838')
      .then(res => {
        this.weatherData = res.data
      })
      .catch(err => console.log(err));
    }
  }
</script>

<template>
  <h1> Hello </h1>
  <WeatherData :weatherData="weatherData" />
</template>

<style scoped>
  /* body {
    animation: fadeInAnimation ease 5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
 
  @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
  } */
</style>
