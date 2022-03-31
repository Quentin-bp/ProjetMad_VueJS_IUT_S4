<template>
  <div>
    <h1>Labo</h1>
    <table border="0">
      <tr>
        <td><h1>Viruses</h1></td>
      </tr>
      <tr>
        <td>
          <CheckedList :fields="['name','code']" :entries="samples" @chosen-changed="$store.state.chosenViruses = $event"/>
        </td>
      </tr>
    </table>
    <label for="cut">part length: </label><input id="cut" v-model.number="cutFactor"><button :disabled="chosenViruses.length==0" @click="$store.commit('cut')">Cut</button>
    <label for="mute">nb mutations: </label><input id="mute" v-model.number="nbMutation"><button :disabled="chosenViruses.length==0" @click="$store.commit('mutation')">Mutation</button>
    <hr/>
    <button @click="$router.push({path:'/labo/mix'})">Go to mixer</button>
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
