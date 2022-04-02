<template>
  <v-card class="justify-content" style="align-item: center">
    <v-img :src="require('../assets/devanture.png')" class="justify-center">
    <v-container style="display:grid; justify-content:center">
        <v-card-title class="justify-center ma-0 white--text text-h2">
          <div>
            <h3 class="headline pink--text text--accent-2 font-weight-bold text-center" style="background-color:#1E1E1E; opacity:0.7; width : 200px">
              <v-icon large>mdi-home</v-icon>
              Entrée
            </h3><br>
            </div>
        </v-card-title>
        <v-card class=" text-h2" style="max-width: 800px; opacity : 0.9">
          <v-card-text class="font-weight-bold text-h5 text-center justify-center">
            Bienvenue dans le laboratoire abandonné d'Artemis, la déesse qui
            peut engendrer des épidémies. Si tu veux récuperer son travail et
            analyser les virus déjà découvert, regarde dans la librairie. Pour
            te tenir sur un pied d'égalité avec elle, on te donne également le
            pouvoir de créer tes propres virus, vas voir dans le laboratoire !
          </v-card-text>
        </v-card>
    </v-container>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "Home",

  computed: {
    devanture() {
      console.log("HEY" + this.$store.state.devanture);
      return {
        Devanture: require(this.$store.state.devanture),
      };
    },
  },
};
</script>
