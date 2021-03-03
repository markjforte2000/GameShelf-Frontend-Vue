<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="inline">
      <Content class="dynamic-width"></Content>
    </div>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content"


export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Sidebar,
    Navbar,
    Content
  },
  mounted() {
    dynamicResize();
  }
}
function dynamicResize() {
  let header = document.getElementById('main-nav');
  let dynamicElementSet = document.getElementsByClassName("dynamic-height");
  for (let i = 0; i < dynamicElementSet.length; i++) {
    dynamicElementSet[i].style.height = window.innerHeight - header.offsetHeight + "px"
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
    .inline {
    display: flex;
    }
    .dynamic-width {
    flex: 1;
    }
</style>
