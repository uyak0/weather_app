<script>
  import WeatherItems from './components/WeatherItems.vue';
  import axios from 'axios';

  export default {
    name: 'app',
    components: {
      WeatherItems
    },

    data() {
      return {
        name: '',
        temp: 0
      }
    },

    methods: {
      created() {
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=199b2efcae35ce7c093a0c456250f838')
        .then(
          res => {
              this.name = res.data.name;
              this.temp = res.data.main.temp;
              console.log(res)
            }
        )
        .catch(err => console.log(err));
      }
    }
  }
</script>

<template>
  <h1> Hello </h1>
  <WeatherItems :name="name" :temp="temp" />
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
