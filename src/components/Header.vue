
<script lang="ts">
    export default {
        name: "Header",
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
    <nav>
        <img class="w-16 mx-2 my-2 float-left" src="../assets/weather-icon.png" alt="weather-logo">
        <span class="searchbar">
            <img class="w-4 float-right" src="src/assets/search-solid.svg">
            <input class="px-2 focus:outline-none" v-model="input" @keyup.enter="addLocation(input)" placeholder="Add location..."> 
        </span>
    </nav>
</template>

<style scoped>
    .searchbar {
        @apply
        float-right
        flex
        border-solid
        border-gray-300 
        border 
        rounded-full
        font-medium
        px-3 py-1
        mx-4 my-7 
    }

    nav {
        @apply
        w-full
        fixed 
        top-0 left-0
        shadow-md
        items-center 
        mx-auto 
        bg-white
    }
</style>