<template>
  <div>
    <table border="0">
      <tr>
        <td><h1>Parts</h1></td>
      </tr>
      <tr>
        <td>
          <CheckedList :fields="['code']" :entries='parts' @chosen-changed="$store.state.chosenParts = $event"/>
        </td>
      </tr>
    </table>
    <button :disabled="chosenParts.length==0" @click="$store.commit('mix')">Mixing</button>

    <hr/>
    <button @click="$router.push({path:'/labo/slice'})">Go to slicer</button>

    <hr/>
    <p v-if="newVirus != null">New virus: <input v-model="newVirus.name"> {{newVirus.code}} {{newVirus.mortalite}}
    <button @click="$store.commit('sendToLibrary')">Send to library</button>
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
