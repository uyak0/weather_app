<template>  
    <div>
        <nav>
            <img class="logo" src="../assets/weather-icon.png">
            <input type="text" placeholder="Add location...">
        </nav>
    </div>
</template>

<style scoped>
    input {
        display: block;
        margin: auto;
        margin-bottom: 10px;
        border-radius: 10px;
        border-style: solid;   
    }
    img {
        display: block;
        width: 65px;
        margin: 0px 0px 20px 0px;
    }
    nav {
        display: grid;
        align-items: left;
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