<template>
  <v-card>
      <v-card-title>Salle de création des virus</v-card-title>
      <table border="1">
        <tr>
          <td>
            <keep-alive include="Mixer">
              <router-view name="locSubCentral"></router-view>
            </keep-alive>
          </td>
        </tr>
      </table>
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
