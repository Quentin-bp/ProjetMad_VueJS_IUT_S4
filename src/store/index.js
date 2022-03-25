import Vue from 'vue'
import Vuex from 'vuex'
import {viruses} from '../model.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    samples : [],
    parts : [],
    collec : viruses,
    basket: [],

  },  
  mutations: {
    receiveVirus : function(state,viruses) {
      console.log("samples : ", state.samples)
      viruses.forEach(v => state.samples.push(v));
      
      },
      store_virus : function(state,virus){
        state.collec.push(virus)
      },
      sendToLab : function(state,basket) {
        console.log("basket: ", basket)
        this.commit('receiveVirus',basket)
        state.basket.splice(0,basket.length)
      }
  },

  actions: {
  },
  modules: {
  }
})
