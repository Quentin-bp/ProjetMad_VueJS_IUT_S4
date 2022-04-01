<template>
  <v-card>
      <v-card-text>Entrée</v-card-text>
      
      <v-card-text>
        <p>
          Bienvenue dans le laboratoire abandonné d'Artemis, la déesse qui peut
          engendrer des épidémies
        </p>

        <p>
          Si tu veux récuperer son travail et analyser les virus déjà découvert,
          regarde dans la librairie
        </p>

        <p>
          Pour te tenir sur un pied d'égalité avec elle, on te donne également
          le pouvoir de créer tes propres virus, vas voir dans le laboratoire !
        </p>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Home",

  computed : {
    devanture(){
      return this.$store.state.devanture
    }
  }
};
</script>
