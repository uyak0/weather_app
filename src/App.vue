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

      /**
       * Retrieves the current location coordinates 
       * using the HTML5 Geolocation API.
       *
       * @return {string} The current location coordinates formatted as 'lat={latitude}&lon={longitude}'.
       */
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(pos => {
            this.coord = `lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
            // console.log(this.coord)
          })
        }
        else {
          console.log('Geolocation is not supported by this browser.');
        }
      }
    },
    /**
     * Asynchronously initializes the component and fetches weather data.
     *
     * @return {Promise<void>} A Promise that resolves when the component is created.
    */
    async created(): Promise<void> {
      // this.coord = await this.getCoord('Kuala Lumpur')
      this.coord = this.getLocation()
      // console.log(this.coord)
      // console.log('App mounted');
      axios.get('https://api.openweathermap.org/data/2.5/weather?' + this.coord + '&units=metric&appid=' + this.APIKey)
      .then(res => {
        this.weatherData = res.data
      })
      .catch(err => console.log(err));
    },

    mounted() {
      // Hover effects for items
      var items = document.getElementsByClassName('weather-item');
      const item2 = document.getElementById('item2') as HTMLElement;
      
      for (let i = 0; i < items.length; i++) { 
        for (let j = 0; j < items.length; j++) {
          items[i].addEventListener('mouseover', function(){
            items[i].classList.add('hovered');
            if (i != j) {
              items[j].classList.add('unhovered');
            }
            if (item2.classList.contains('unhovered')) {
              if (items[0].classList.contains('hovered')) {
                item2.style.transform = "scale(0.8) translate(50px, -10px) rotate(5deg)";
              }
              else if (items[2].classList.contains('hovered')) {
                item2.style.transform = "scale(0.8) translate(-50px, 10px) rotate(-5deg)";
              }
            }
          })

          items[i].addEventListener('mouseout', function(){
            items[i].classList.remove('hovered');
            item2.style.transform = "";
            if (i != j) {
              items[j].classList.remove('unhovered');
              item2.style.transform = "";
            }
          })
        }
      }
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
  .hovered#item3 { transform: scale(1.25) rotate(10deg); }

  .unhovered { filter: blur(2px) }
  .unhovered#item1 { transform: scale(0.8) translate(30px, 40px) rotate(-15deg); }
  .unhovered#item3 { transform: scale(0.8) translate(-30px, 40px) rotate(15deg); }
</style>
