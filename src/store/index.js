import Vue from 'vue'
import Vuex from 'vuex'
import {viruses} from '../model.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    samples : [],
    parts : [],
    chosenParts:[],
    chosenViruses:[],
    collec : viruses,
    basket: [],

  },  
  mutations: {
    receiveVirus : function(state,viruses) {
      viruses.forEach(v => state.samples.push(v));
      },
      store_virus : function(state, event){
        state.collec.push(event)
      },
      sendToLab : function() {
        this.$store.commit('receiveVirus',this.basket)
        this.basket.splice(0,this.basket.length)
      }
  },

  actions: {
  },
  modules: {
  }
})
