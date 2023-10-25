<script lang="ts">
    export default {
        name: "ToggleTheme",

        data() {
            return {
                isToggled: false,
            }
        },

        methods: {

        }
    }
</script>

<template>
    <label class="relative inline-flex items-center cursor-pointer" @change="isToggled=!isToggled" >
        <input type="checkbox" value="" class="sr-only peer">
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        
        <div class="absolute left-12 w-3/6 ml-1.5">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" :class="{ 'fill-gray-900': isToggled, 'fill-gray-400': !isToggled }">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <g id="Lager_94" data-name="Lager 94" transform="translate(0)">
                        <path id="Path_70" data-name="Path 70" d="M12.516,4.509A12,12,0,0,0,22.3,19.881,12.317,12.317,0,0,0,24,20a11.984,11.984,0,0,0,3.49-.514,12.1,12.1,0,0,1-9.963,8.421A12.679,12.679,0,0,1,16,28,12,12,0,0,1,12.516,4.509M16,0a16.5,16.5,0,0,0-2.212.15A16,16,0,0,0,16,32a16.526,16.526,0,0,0,2.01-.123A16.04,16.04,0,0,0,31.85,18.212,16.516,16.516,0,0,0,32,15.944,1.957,1.957,0,0,0,30,14a2.046,2.046,0,0,0-1.23.413A7.942,7.942,0,0,1,24,16a8.35,8.35,0,0,1-1.15-.08,7.995,7.995,0,0,1-5.264-12.7A2.064,2.064,0,0,0,16.056,0Z">
                        </path> 
                    </g> 
                </g>
            </svg>
        </div>
    </label>
</template>