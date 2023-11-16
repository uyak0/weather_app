<script lang="ts">
    import ToggleTheme from './ToggleTheme.vue';
    import Searchbar from './Searchbar.vue';

    export default {
        name: "Header",
        components: {
            ToggleTheme,
            Searchbar,
        },
        emits: ['add-location', 'dark-toggle'],

        data() {
            return {
                darkMode: false,
                input: '',
            }
        },
        
        methods: {
            addLocation(n: string): void {
                this.input = n;
                this.$emit('add-location', this.input);
                this.input = '';
            },
        }
    }
</script>

<template>  
    <nav class="grid grid-cols-5 gap-4 w-full top-0 left-0 shadow-md items-center bg-white dark:frappe dark:bg-base">
        <img class="w-16 mx-2 my-2 float-left content-logo dark:content-logo-dark" alt="weather-logo">
        
        <!-- Theme Toggle Button -->
        <div class="flex flex-row-reverse mx-3 col-start-4">
            <ToggleTheme @dark-toggle="$emit('dark-toggle'), darkMode = !darkMode "/>
        </div>

        <!-- Searchbar -->
        <div class="col-start-5">
            <Searchbar @add-location="addLocation"/>
        </div>

    </nav>
</template>
