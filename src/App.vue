<template>
  <v-app>
    <NavBar :titles="titles" />
    <keep-alive>
      <router-view name="locCentral"></router-view>
    </keep-alive>
  </v-app>
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


</style>