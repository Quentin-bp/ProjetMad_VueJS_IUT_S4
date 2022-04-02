<template>
  <div>
    <v-card style="width: 800px;" class="justify-center">
        <v-card-title class="justify-center ma-0 white--text text-h2">
            <h3 class=" headline text--accent-2 font-weight-bold text-center"  style="background-color: #1e1e1e; opacity: 0.7; width: 200px"  >
              Panier
            </h3>
        </v-card-title>
       <v-data-table
      :headers="[
        { text: 'Nom', value: 'name'},
        { text: 'Code', value: 'code', sortable: false},
        { text: '% Mortalité', value:'mortalite'},
        { text: 'Retirer du panier' },
      ]"
      :items="basket"
      :items-per-page="10"
      class="elevation-1"
    >
      <template #item="{ item }">
        <tr style="color: rgba(255, 255, 255, 0.7)">
          <td>{{ item.name }}</td>
          <td>{{ item.code }}</td>
          <td>
            <v-chip color="red">{{ item.mortalite }} %</v-chip>
          </td>
          <td> <v-btn @click="$store.commit('removeFromBasket',item)"> Retirer </v-btn></td>
            </tr>
      </template>
    </v-data-table>
    <div>
      
        <v-btn style=' margin-top: 30px; float:right' @click="$store.commit('sendToLab',basket)">Envoyer au laboratoire</v-btn>
    </div>
    </v-card>
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
