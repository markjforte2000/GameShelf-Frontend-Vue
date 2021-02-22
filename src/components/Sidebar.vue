<template>
  <div class="fill-height">
    <sidebar-menu :menu="menu" relative="true" width="15vw" id="sidebar"/>
  </div>
</template>

<script>
function buildSidebar(titles) {
  let sideBarOptions = [
  ]
  titles.forEach(title => {
    sideBarOptions.push({
      href: '#',
      title: title,
      icon: 'fa fa-user'
    })
  })
  return sideBarOptions;
}
function dynamicResize() {
  let header = document.getElementById('main-nav')
  document.getElementById('sidebar').style.height = window.innerHeight - header.offsetHeight + "px"
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
    dynamicResize()
  }
}
</script>

<style scoped>
</style>