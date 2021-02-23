<template>
  <sidebar-menu :menu="menu" relative="true" width="15vw" id="sidebar">
      <span slot="toggle-icon">
        <font-awesome-icon :icon="['fas', 'bars']" :style="{ color: 'white' }"/>
      </span>
  </sidebar-menu>
</template>

<script>
function buildSidebar(titles) {
  let sideBarOptions = [];
  titles.forEach(title => {
    sideBarOptions.push({
      href: '#',
      title: title,
      icon: {
        element: 'font-awesome-icon',
        class: "sidebar-icon",
        attributes: {
          icon: "gamepad"
        }
      }
    })
  });
  return sideBarOptions;
}
function removeIconBackground() {
  let iconSet = document.getElementsByClassName("sidebar-icon");
  for (let i =  0; i < iconSet.length; i++) {
    console.log(iconSet[i]);
    iconSet[i].style.backgroundColor = "transparent";
  }
}
export default {
  props: {
    titles: Array
  },
  data: function () {
    return {
      menu: buildSidebar(this.titles)
    }
  },
  mounted() {
    removeIconBackground();
  }
}
</script>

<style scoped>
#sidebar {
}
</style>