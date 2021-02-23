<template>
  <div class="nav-wrapper">
    <div class="main-nav" id="main-nav">
      <nav class="fill">
        <div class="left">
          <GameSelectDropdown class="nav-item"></GameSelectDropdown>
        </div>
        <div class="center">
          <SearchBar class="nav-item"></SearchBar>
        </div>
        <div class="right">

        </div>
      </nav>
    </div>
    <div class="nav-buffer">

    </div>
  </div>
</template>

<script>
import GameSelectDropdown from "./GameSelectDropdown";
import SearchBar from "./SearchBar";
export default {
  name: "Navbar",
  components: {SearchBar, GameSelectDropdown}
}
</script>

<style scoped>
  .main-nav {
    width: 100vw;
    height: 10vh;
    background-color: #cec9cc;
    position: fixed;
    z-index: 10;
  }
  .nav-buffer {
    width: 100vw;
    height: 10vh;
  }
  h4 {
    margin: 0;
    color: white;

  }
  .fill {
    height: 100%;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1vw;
    padding-right: 1vw;
  }
  .nav-item {
    padding-left: 0.5vw;
    padding-right: 0.5vw;
  }
  .left, .right {
    flex: 1;
  }
</style>