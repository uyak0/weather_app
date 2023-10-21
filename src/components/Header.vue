<template>  
    <div>
        <nav>
            <img class="logo" src="../assets/weather-icon.png" alt="weather-logo">
            <input type="text" placeholder="Add location...">
        </nav>
    </div>
</template>

<style scoped>
    input {
        font-size: 15px;
        float: right;
        margin: 1.5rem 1rem 0 0;
        padding: 2px 0 2px 10px;
        border-radius: 15px;
        border-style: solid;
    }
    img {
        width: 65px;
        margin: 0 0 0 10px;
    }
    nav {
        display:inline;
        position: fixed;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 2.5rem;
        margin: 0;
        padding: 0;
        background-color: white;
        box-shadow: 0px 2px 5px rgba(201, 201, 201, 0.6);
    }
</style>