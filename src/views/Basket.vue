<template>
  <div>
    <h2>In my basket :</h2>
    <table >
      <tr><td>Name</td><td>Code</td><td>% Mortality</td></tr>
      <tr v-for="(v,index) in basket" :key="index">
        <td>{{v.name}}</td><td>{{v.code}}</td><td>{{v.mortalite}}</td>
      </tr>
    </table>
    <v-btn @click="$store.commit('sendToLab',basket)">Send to the lab</v-btn>
  </div>
</template>

<script>

  import {Virus} from "../model";

  export default {
    name: 'Basket',
    props: ['operation','name','code'],
    computed:{
      basket(){
        return this.$store.state.basket
      }
    },
    watch: {
      operation(to) {
        if (to == 'addbasket') {
          this.basket.push(new Virus(0,this.name, this.code))
          this.$router.push({path:'/library/view'})
        }
      }
    }
  }
</script>

<style scoped>
</style>
