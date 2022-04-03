<template>
 <v-card outlined color="rgb(0, 0, 0, 0.5)">
    <v-img :src="require('../assets/laboratoire.gif')">
      <v-container style="display: grid; justify-content: center">
        <v-card-title class="justify-center ma-0 white--text text-h2">
          <div>
            <h3 class=" headline pink--text text--accent-2 font-weight-bold text-center"  style="background-color: #1e1e1e; opacity: 0.7; width: 400px"  >
              Salle de création des virus
            </h3>
            <br />
          </div>
        </v-card-title>
            <table border="1">
        <tr>
          <td>
              <v-container style="display: grid; justify-content: center">
        <v-card style="max-width: 1000px; opacity: 0.9">
            <keep-alive include="Mixer">
              <router-view name="locSubCentral"></router-view>
            </keep-alive>
         </v-card>
              </v-container>
  
          </td>
        </tr>
      </table>
      </v-container>
    </v-img>
    </v-card>
</template>

<script>
export default {
  name: "Labo",
  computed: {
    samples() {
      return this.$store.state.samples;
    },
    parts() {
      return this.$store.state.parts;
    },
  },
};
</script>

<style scoped>
</style>
