<template>
    <form class="nav-item search-form">
        <label hidden for="search-bar">Search Bar</label>
        <div class="search-wrapper">
            <font-awesome-icon :icon="['fas', 'search']" :style="{ color: ' #4f43ae' }" class="search-icon"/>
            <input id="search-bar" type="text" placeholder="Search">
        </div>
    </form>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style scoped>
    .search-form {
        justify-self: center;
    }
    .search-wrapper {
        width: 30vw;
        height: 6vh;
        position: relative;
    }
    input[type=text]:focus {
        outline: none;
        background-color: #b5b6e4;
    }
    input[type=text] {
        border-radius: 5px;
        outline: none;
        background-color: #908a99;
        border: none;
        font-size: 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        z-index: 0;
        padding-left: 2.25vw;
        color: #4f43ae;
    }
    .search-icon {
        position: absolute;
        left: 0.5vw;
        height: 6vh;
        top: 1px;
        z-index: 1;
    }
</style>