<template>
  <div>
    <table>
      <tr>
        <td>
          <p v-for="(e,index) in entries" :key="index">
            <input type="checkbox" :id="index" :value="index" v-model="chosenEntries" @change="$store.state.chosenParts = $event">
            <label for="index"><span v-for="(f,index) in fields" :key="index">{{e[f]}} </span></label>
          </p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'CheckedList',
    props: ['fields',"entries"],
    data : () => {
      return {
        chosenEntries:[]
      }
    },
    computed :{
      samples(){
        return this.$store.state.samples
      },
      parts(){
        console.log("parts checked liste", this.$store.state.parts)
        return this.$store.state.parts
      }
    }
  }
</script>

<style scoped>
</style>
