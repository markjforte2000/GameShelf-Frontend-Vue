<template>
  <div class="main-nav" id="main-nav">
    <nav class="fill">
      <h4 class="brand nav-item">My Game Library</h4>
      <form class="nav-item">
        <label hidden for="search-bar">Search Bar</label>
        <div class="search-wrapper">
          <font-awesome-icon :icon="['fas', 'search']" :style="{ color: 'white' }" class="search-icon"/>
          <input id="search-bar" type="text" class="search">
        </div>
      </form>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.main-nav {
  width: 100vw;
  height: 10vh;
  background-color: #2a2a2e;
}
h4 {
  margin: 0;
  color: white;
}
.fill {
  width: 100%;
  height: 100%;
}
nav {
  display: flex;
  align-items: center;
  padding-left: 1vw;
  padding-right: 1vw;;
}
.nav-item {
  padding-left: 0.5vw;
  padding-right: 0.5vw;
}
.search-wrapper {
  width: 30vw;
  height: 6vh;

}
input[type=text]:focus {
  outline: none;
  background-color: white;
}
input[type=text] {
  border-radius: 5px;
  outline: none;
  background-color: #47474a;
  border: none;
  font-size: 100%;
  width: 100%;
  height: 100%;
}
.search-icon {
}
</style>