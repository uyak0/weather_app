<script lang="ts">
  import Header from './components/Header.vue';
  import WeatherItems from './components/WeatherItems.vue';
  import axios from 'axios';
  import { inject } from 'vue';

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
        darkMode: false,
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
        this.weatherData = []
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

      async addLocation(location: string) {
        await axios.get('http://api.openweathermap.org/geo/1.0/direct?q=' + 
          location + '&limit=5&appid=' + this.APIKey)
          .then(res => {
            this.coords.push([res.data[0].lat, res.data[0].lon])
          })
          .catch(err => console.log(err));
          await this.findWeather();
      },
    },

    async mounted() {
      await this.findCurrLocation();
      await this.findWeather();
      
      console.log(this.weatherData);
    }
  }
</script>

<template>
  <!-- Dark Mode -->
  <div :class="{ 'dark': darkMode }">
  <div class="bg-white dark:frappe dark:bg-crust" >

    <div class="flex flex-wrap flex-col min-h-screen">
      <Header @add-location="addLocation" @dark-toggle="darkMode = !darkMode"/>

      <div class="flex flex-wrap grid-cols-5 gap-2 my-5 mx-5">
        <template v-for="(data, index) in weatherData">
          <WeatherItems :id="'item' + index" :weatherData="data" @delete-item="weatherData.splice(index,1), coords.splice(index, 1)"/>
        </template>
      </div>  
    </div>
  </div>
  </div>
</template>


