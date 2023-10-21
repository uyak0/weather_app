<script lang="ts">
  import Header from './components/Header.vue';
  import WeatherItems from './components/WeatherItems.vue';
  import axios from 'axios';

  export default {
    name: 'app',
    components: {
      Header,
      WeatherItems
    },

    data() {
      return {
        weatherData: [] as Array<any>,
        coords: [] as Array<[number, number]>,
        APIKey: import.meta.env.VITE_API_KEY as string,
      }
    },

    methods: {
      /**
       * Finds the current location using the geolocation API and adds 
       * the latitude and longitude to the `coords` array.
       *
       * @return {Promise<void>} Returns a promise that resolves when the 
       * location is found and the coordinates are added to the `coords` array.
       */
      async findCurrLocation(): Promise<void> {
        const getPos = () => {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        };

        const pos = await getPos() as GeolocationPosition;
        this.coords.push([pos.coords.latitude, pos.coords.longitude]);
      },

      /**
       * Finds nearby places based on the current user's geolocation.
       *
       * @return {Promise<void>} Resolves when the nearby places have been found.
       */
      async findNearBy(): Promise<void> {
        await axios.get('http://api.geonames.org/findNearbyPlaceNameJSON?lat=' +
                        this.coords[0][0] + '&lng=' + this.coords[0][1] +
                        '&cities=cities15000&radius=30&username=uyako')
        .then(res => {
          for (let i = 0; i < 2; i++) {
            this.coords.push([res.data.geonames[i].lat, res.data.geonames[i].lng])
          }
        })
        .catch(err => console.log(err));
      },

      /**
       * Retrieves weather data for each set of coordinates in the `coords` array.
       *
       * @return {Promise<void>} - A promise that resolves when all weather data is fetched.
       */
      async findWeather(): Promise<void> {
        for (let i = 0; i < this.coords.length; i++) {
          await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' +
            this.coords[i][0] + '&lon=' + this.coords[i][1] +
            '&units=metric&appid=' + this.APIKey)
            .then(res => {
              this.weatherData.push(res.data)
            })
            .catch(err => console.log(err));
        }
      },

      /**
       * Applies hover effects to weather items, specifically to item2.
       */
      applyHoverEffects() {
        const weatherItems = document.getElementsByClassName('weather-item');
        const item2 = document.getElementById('item2') as HTMLElement;

        for (let i = 0; i < weatherItems.length; i++) {
          for (let j = 0; j < weatherItems.length; j++) {
            weatherItems[i].addEventListener('mouseover', function () {
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

            weatherItems[i].addEventListener('mouseout', function () {
              weatherItems[i].classList.remove('hovered');
              item2.style.transform = "";
              if (i != j) {
                weatherItems[j].classList.remove('unhovered');
                item2.style.transform = "";
              }
            })
          }
        }
      }
    },

    async mounted() {
      await this.findCurrLocation();
      // await this.findNearBy();
      await this.findWeather();
      this.applyHoverEffects();
    }
  }
</script>

<template>
  <Header />

  <template v-if="weatherData.length < 2 && weatherData.length != 0">
    <WeatherItems class="weather-item" id="item2" :weatherData="weatherData[0]" />
  </template>

  <template v-else-if="weatherData.length > 2">
    <WeatherItems class="weather-item" id="item1" :weatherData="weatherData[1]" />
    <WeatherItems class="weather-item" id="item2" :weatherData="weatherData[0]" />
    <WeatherItems class="weather-item" id="item3" :weatherData="weatherData[2]" />
  </template>
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
