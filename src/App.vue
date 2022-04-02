<template>
  <v-app>
    <NavBar :titles="titles" />
    <v-img :src="require('./assets/devanture.png')" class="justify-center">
    <keep-alive>
      <router-view name="locCentral"></router-view>
    </keep-alive>
    </v-img>
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