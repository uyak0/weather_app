<script lang="ts">
    import ToggleTheme from './ToggleTheme.vue';

    export default {
        name: "Header",
        components: {
            ToggleTheme
        },

        emits: ['add-location'],
        data() {
            return {
                input: '',
            }
        },

        methods: {
            addLocation(input: string) {
                this.$emit('add-location', input);
                this.input='';
            }
        }
    }
</script>

<template>  
    <nav class="w-full top-0 left-0 shadow-md items-center bg-white">
        <img class="w-16 mx-2 my-2 float-left" src="../assets/weather-icon.png" alt="weather-logo">
        <div class="absolute right-80 top-8">
            <ToggleTheme />
        </div>
        <span class="relative float-right flex border-solid border border-gray-300 rounded-full font-medium px-4 py-1 mx-5 my-7">
            <div class="absolute pointer-events-none mt-1">
                <svg class="absolute" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#9ca3af">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                </svg>
            </div>
            <input class="pl-6 focus:outline-none" v-model="input" @keyup.enter="addLocation(input)" placeholder="Add location..."> 
        </span>
    </nav>
</template>
