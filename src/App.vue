<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar v-bind:titles="['GBA', 'GBC', 'N64', 'PS3']"></Sidebar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
  padding: 0;
}
</style>
