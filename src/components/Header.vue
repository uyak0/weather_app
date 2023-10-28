<script lang="ts">
    import ToggleTheme from './ToggleTheme.vue';
    import Searchbar from './Searchbar.vue';

    export default {
        name: "Header",
        components: {
            ToggleTheme,
            Searchbar,
        },
        emits: ['add-location'],
    }
</script>

<template>  
    <nav class="grid grid-cols-3 gap-4 w-full top-0 left-0 shadow-md items-center bg-white">
        <img class="w-16 mx-2 my-2 float-left" src="../assets/weather-icon.png" alt="weather-logo">
        
        <!-- Theme Toggle Button -->
        <div class="flex flex-row-reverse mx-3">
            <ToggleTheme />
        </div>

        <!-- Searchbar -->
        <div>
            <Searchbar />
        </div>

    </nav>
</template>
