<template>
  <div>
    <h1 style="color:mediumorchid">Salle de la Trancheuse d'Artémis</h1>
    <table border="0">
      <tr>
        <td><h1>Virus</h1></td>
      </tr>
      <tr>
        <td>
          <CheckedList :fields="['name','code']" :entries="samples" @chosen-changed="$store.state.chosenViruses = $event"/>
        </td>
      </tr>
    </table>
    <label for="cut">Longueur du morceau : </label><input style="color: magenta" id="cut" v-model.number="cutFactor"><v-btn :disabled="chosenViruses.length==0" @click="$store.commit('cut')">Trancher</v-btn> <br>
    <label for="mute">Nombre de mutations : </label><input style="color: magenta" id="mute" v-model.number="nbMutation"><v-btn :disabled="chosenViruses.length==0" @click="$store.commit('mutation')">Faire muter</v-btn>
    <hr/>
    <v-btn style=' margin-top: 30px; float:right' @click="$router.push({path:'/labo/mix'})">Vers le mixeur d'Artémis</v-btn>
  </div>
</template>

<script>
  import CheckedList from '../components/CheckedList.vue'

  export default {
    name: 'Slicer',
    computed :{
        samples(){
          return this.$store.state.samples
        },
        parts(){
          return this.$store.state.parts
        },
        chosenViruses(){
          return this.$store.state.chosenViruses
        },
        nbMutation(){
          return this.$store.state.nbMutation
        },
        cutFactor(){
          return this.$store.state.cutFactor
        }
    },
    components: {
      CheckedList
    },
  }
</script>

<style scoped>
</style>
