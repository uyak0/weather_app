<script lang="ts">
  import { ref } from 'vue';
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
        coord: '' as string,
        APIKey: import.meta.env.VITE_API_KEY as string,
      }
    },

   methods: {
      /**
      * Retrieves the latitude and longitude coordinates for a given location 
      * using the OpenWeatherMap API.
      *
      * @param {string} location - The location for which to retrieve coordinates.
      * @return {Promise<string>} - The coordinates in the format 'lat={latitude}&lon={longitude}'.
      */
     async getCoord(location: string): Promise<string> {
        await axios.get('http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=5&appid=' + this.APIKey)
        .then(res => {
            this.coord = `lat=${res.data[0].lat}&lon=${res.data[0].lon}`
            // console.log(this.APIKey)
          })
        .catch(err => console.log(err));
        return this.coord
      },
    },

    /**
     * Asynchronously initializes the component and fetches weather data.
     *
     * @return {Promise<void>} A Promise that resolves when the component is created.
    */
    async created(): Promise<void> {

      /**
       * Retrieves the current position of the user.
       *
       * @return {Promise} A Promise that resolves with the current position or rejects with an error.
       */
      const getPos = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      };
      
      const pos = await getPos() as GeolocationPosition;
      this.coord = `lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`

      await axios.get('https://api.openweathermap.org/data/2.5/weather?' + this.coord + '&units=metric&appid=' + this.APIKey)
      .then(res => {
        this.weatherData = res.data
      })
      .catch(err => console.log(err));
    },

    mounted() {
      /** Hover Effects on Weather Items */
      const weatherItems = document.getElementsByClassName('weather-item');
      const item2 = document.getElementById('item2') as HTMLElement;

      for (let i = 0; i < weatherItems.length; i++) { 
        for (let j = 0; j < weatherItems.length; j++) {
          weatherItems[i].addEventListener('mouseover', function(){
            weatherItems[i].classList.add('hovered');
            if (i != j) {
              weatherItems[j].classList.add('unhovered');
            }
            if (item2.classList.contains('unhovered')) {
              if (weatherItems[0].classList.contains('hovered')) {
                item2.style.transform = "scale(0.8) translate(50px, -10px) rotate(5deg)";
              }
              else if (weatherItems[2].classList.contains('hovered')) {
                item2.style.transform = "scale(0.8) translate(-50px, -10px) rotate(-5deg)";
              }
            }
          })

          weatherItems[i].addEventListener('mouseout', function(){
            weatherItems[i].classList.remove('hovered');
            item2.style.transform = "";
            if (i != j) {
              weatherItems[j].classList.remove('unhovered');
              item2.style.transform = "";
            }
          })
        }
      }
      /** -------- */
    }
  }
</script>

<template>
  <WeatherItems class="weather-item" id="item1" :weatherData="weatherData" />
  <WeatherItems class="weather-item" id="item2" :weatherData="weatherData" />
  <WeatherItems class="weather-item" id="item3" :weatherData="weatherData" />
</template>

<style scoped>
  #item1 { transform: rotate(-5deg) translate(15px, 15px); }
  #item2 { transform: translate(0, -10px); z-index: 1; }
  #item3 { transform: translate(-15px, 15px) rotate(5deg); }

  .hovered#item1 { transform: scale(1.25) rotate(-10deg); }
  .hovered#item2 { transform: scale(1.25); }
  .hovered#item3 { transform: scale(1.25) rotate(10deg) translate3d(0,0,10px); }

  .unhovered { filter: blur(2px) }
  .unhovered#item1 { transform: scale(0.8) translate(30px, 40px) rotate(-15deg); }
  .unhovered#item3 { transform: scale(0.8) translate(-30px, 40px) rotate(15deg); }
</style>
