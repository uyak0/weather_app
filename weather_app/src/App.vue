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
      * @return {Promise<string>} - The coordinates in the format 'lat={latitude}&lon={longitude}'.
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
      // console.log(this.coord)
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
  <WeatherItems class="weather-item" id="item1" :weatherData="weatherData" />
  <WeatherItems class="weather-item" id="item2" :weatherData="weatherData" />
  <WeatherItems class="weather-item" id="item3" :weatherData="weatherData" />
</template>

<style scoped>
  #item1 {
    transform: rotate(-5deg) translate(15px, 15px);
  }
  #item1:hover {
    transform: scale(1.25) rotate(-10deg);
    z-index: 0;
  }
  #item1:hover ~ #item3 {
    transform: scale(0.8) translate(-30px, 40px) rotate(15deg);
    z-index: 0;
    filter: blur(2px);
  }
  #item1:hover + #item2 {
    transform: scale(0.8) translate(50px, -10px) rotate(5deg);
    z-index: 1;
    filter: blur(2px);
  }

  #item2 {
    transform: translate(0, -10px);
    z-index: 1;
  }
  #item2:hover {
    transform: scale(1.25);
  }
  #item2::before:hover {
    transform: scale(0.8) translate(50px, -10px) rotate(5deg);
    filter: blur(2px);
  }
  #item2:hover + #item3 {
    transform: scale(0.8) translate(-30px, 40px) rotate(15deg);
    filter: blur(2px);
  }
  #item2:hover  {
    
  }

  #item3 {
    transform: translate(-15px, 15px) rotate(5deg);
  }
  #item3:hover {
    transform: scale(1.1) rotate(1deg);
    z-index: 1;
  }
</style>
