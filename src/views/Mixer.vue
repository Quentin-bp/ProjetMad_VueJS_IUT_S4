<template>
  <div>
    <table border="0">
      <tr>
        <td><h1 style="color:mediumorchid"> Morceaux de virus </h1></td>
      </tr>
      <tr>
        <td>
          <CheckedList :fields="['code']" :entries='parts' @chosen-changed="$store.state.chosenParts = $event"/>
        </td>
      </tr>
    </table>
    <v-btn :disabled="chosenParts.length==0" @click="$store.commit('mix')">Mixer</v-btn>

    <hr/>
    <br>
    <v-btn @click="$router.push({path:'/labo/slice'})">Aller vers la Trancheuse d'Artémis</v-btn>

    <hr/>
    <p v-if="newVirus != null"> <br> Nouveau virus : <input  style="color: magenta" v-model="newVirus.name"> <br><br>Code : {{newVirus.code}} <br> Taux de mortalité : {{newVirus.mortalite}} %<br><br>
    <v-btn @click="$store.commit('sendToLibrary')">Envoyer à la librairie</v-btn>
    </p>

  </div>
</template>

<script>
  import CheckedList from '../components/CheckedList.vue'

  export default {
    name: 'Mixer',
    computed :{
        parts(){
          return this.$store.state.parts
        },
        newVirus() {
          return this.$store.state.newVirus
        },
        chosenParts(){
          return this.$store.state.chosenParts
        }
    },
    components: {
      CheckedList
    },

  }
</script>

<style scoped>
</style>
