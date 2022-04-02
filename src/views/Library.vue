<template>
  <v-card outlined color="rgb(0, 0, 0, 0.5)">
    <v-img :src="require('../assets/librairie.gif')">
      <v-container style="display: grid; justify-content: center">
        <v-card-title class="justify-center ma-0 white--text text-h2">
          <div>
            <h3 class=" headline pink--text text--accent-2 font-weight-bold text-center"  style="background-color: #1e1e1e; opacity: 0.7; width: 200px"  >
              Library
            </h3>
            <br />
          </div>
        </v-card-title>
        <v-card class="text-h2" style="max-width: 800px; opacity: 0.9">
          <v-card-text class="font-weight-bold text-center justify-center" >
            <Articles />
            </v-card-text>
        </v-card>
        
        </v-container>
      <v-container style="display: grid; justify-content: center">
        <v-card style="max-width: 800px; opacity: 0.9">
          <router-view name="locDown"></router-view>
         </v-card>
      </v-container>

    </v-img>
  </v-card>
</template>

<script>
import Articles from "../components/Articles.vue";
export default {
  name: "Library",
  components: {
    Articles,
  },
};
</script>

<style scoped>
</style>
