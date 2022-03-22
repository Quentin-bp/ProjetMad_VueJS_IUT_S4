import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    samples : [],
    parts : [],
  },
  mutations: {
    receiveVirus : function(state,viruses) {
      viruses.forEach(v => state.samples.push(v));
      }
  },
  
  actions: {
  },
  modules: {
  }
})
