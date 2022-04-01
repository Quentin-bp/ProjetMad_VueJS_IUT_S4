<template>
  <v-parallax  :src="require('../assets/devanture.png')"  >

    <v-card max-width="800" class="mx-auto my-auto" outlined color="rgb(0, 0, 0, 0.5)">
      <v-card-title class="justify-center ma-0 white--text text-h2">
        <div>

          <h3 class="headline pink--text text--accent-2">
            <v-icon large>mdi-home</v-icon>
            Entrée
          </h3>
        </div>
      </v-card-title>
      <v-card-text class="font-weight-bold text-h5 text-center">
          Bienvenue dans le laboratoire abandonné d'Artemis, la déesse qui peut
          engendrer des épidémies
          Si tu veux récuperer son travail et analyser les virus déjà découvert,
          regarde dans la librairie
          Pour te tenir sur un pied d'égalité avec elle, on te donne également
          le pouvoir de créer tes propres virus, vas voir dans le laboratoire !
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
