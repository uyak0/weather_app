<script setup>
    import { ref } from 'vue'
    import axios from 'axios'

    const items = ref(''),
          temp = ref(0);

    axios({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=199b2efcae35ce7c093a0c456250f838',
        responseType: 'json'
    })
    .then(
        res => {
            items.value = res.data.name;
            temp.value = res.data.main.temp;
            console.log(res)
        }
    )
    .catch(err => console.log(err));
</script>

<template>
    <div class="container">
        <h1>{{ items }}</h1>
        <h2>{{ temp }}</h2>
    </div>  
</template>

<style scoped>
    .container {
        border: 1px solid grey;
        padding: 10px;
        border-radius: 10px;
    }
    .container:hover {
        background-color: lightgrey;
    }
</style>
