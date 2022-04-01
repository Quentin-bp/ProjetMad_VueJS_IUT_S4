<template>
  <div id="app">
    <NavBar :titles="titles" />
    <keep-alive>
      <router-view name="locCentral"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

  export default {
    name: 'App',

    computed : {
      titles(){
        return this.$store.state.titles
      },
      currentMenu(){
        return this.$store.state.currentMenu
      },
      actualPicture(){
        return this.$store.state.actualPicture
      }
    },
    components: {
      NavBar
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>