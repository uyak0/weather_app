<script lang="ts">
  import WeatherItems from './components/WeatherItems.vue';
  import axios from 'axios';

  export default {
    name: 'app',
    components: {
      WeatherItems
    },

    data() {
      return {
        weatherData: [],
        coord: '' as string
      }
    },

   methods: {
      /**
      * Retrieves the latitude and longitude coordinates for a given location.
      *
      * @param {string} location - The location for which to retrieve coordinates.
      * @return {Promise<string>} The coordinates in the format 'lat={latitude}&lon={longitude}'.
      */
     async getCoord(location: string): Promise<string> {
        await axios.get('http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=5&appid=199b2efcae35ce7c093a0c456250f838')
        .then(res => {
            this.coord = `lat=${res.data[0].lat}&lon=${res.data[0].lon}`
          })
        .catch(err => console.log(err));
        return this.coord
      }
    },

    /**
     * Initializes the component when it is created.
     *
     * @return {Promise<void>} - A promise that resolves when the component is created.
     */
    async created(): Promise<void> {
      this.coord = await this.getCoord('Kuala Lumpur')
      console.log(this.coord)
      // console.log('App mounted');
      axios.get('https://api.openweathermap.org/data/2.5/weather?' + this.coord + '&units=metric&appid=199b2efcae35ce7c093a0c456250f838')
      .then(res => {
        this.weatherData = res.data
      })
      .catch(err => console.log(err));
    }
  }
</script>

<template>
  <WeatherItems :weatherData="weatherData" />
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
