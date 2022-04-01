<template>
  <v-parallax  :src= "require('../assets/devanture.png')"  >

    <v-card max-width="800" class="mx-auto my-auto" outlined color="rgb(0, 0, 0, 0.5)">
      <v-card-title class="justify-center ma-0 white--text text-h2">
        <div>

          <h3 class="headline pink--text text--accent-2">
            <v-icon large>mdi-home</v-icon>
            Home
          </h3>
        </div>
      </v-card-title>
      <v-card-text class="font-weight-bold text-h5 text-center">
        Welcome to Dr Mad P4 laboratory. Here you can create the most monstruous viruses ever known
        Go to the Library to browse the collection of Dr Mad
        Go to the Lab to imagine new viruses
      </v-card-text>
    </v-card>
  </v-parallax>
</template>

<script>
export default {
  name: "Home",

  computed : {
    devanture(){
      console.log("HEY" + this.$store.state.devanture)
      return{
        Devanture: require(this.$store.state.devanture)
      }
    }
  }
};
</script>
