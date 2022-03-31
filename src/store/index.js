import Vue from 'vue'
import Vuex from 'vuex'
import {Virus,viruses} from '../model.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titles : [ { text: "Home", color:"black", path:"/home"}, { text: "Lab", color:"blue", path:"/labo/slice"}, { text: "Library", color:"red", path:"/library/view"} ],
    currentMenu : 0,
    
    samples : [],
    parts : [],
    collec : viruses,
    basket: [],

    chosenViruses: [],
    cutFactor: 5,
    nbMutation : 10,

    chosenParts: [],
    newVirus : null,

    chosenEntries:[]

  },  
  mutations: {
      receiveVirus : function(state,viruses) {
      viruses.forEach(v => state.samples.push(v));
      
      },
      store_virus : function(state,virus){
        state.collec.push(virus)
      },
      sendToLab : function(state,basket) {
        this.commit('receiveVirus',basket)
        state.basket.splice(0,basket.length)
      },


      cut : function() {
        if (this.state.cutFactor == 0) return;
        this.state.chosenViruses.forEach(e => {
          let s = this.state.samples[e];
          for(let i=0;i<s.code.length;i+=this.state.cutFactor) {
            this.state.parts.push({code : s.code.substring(i,i+this.state.cutFactor)});
          }
        });
        // remove chosen viruses
        for(let i=this.state.chosenViruses.length-1;i>=0;i--) {
          this.state.samples.splice(this.state.chosenViruses[i],1);
        }
        // unselect all
        this.state.chosenViruses.splice(0,this.state.chosenViruses.length)
      },

      mutation : function() {
        if (this.state.nbMutation == 0) return;

        this.state.chosenViruses.forEach(e => {
          let newCode;
          let s = this.state.samples[e];
          for(let i=0;i<this.state.nbMutation;i++) {
            let idx = Math.floor(Math.random() * s.code.length);
            let chr =  String.fromCharCode(Math.floor(Math.random() * 4)+ "A".charCodeAt(0));
            newCode = s.code.substring(0,idx) + chr + s.code.substring(idx+1);
            s.code = newCode;
            s.updateCaracs();
          }
        });
      },


      sendToLibrary : function() {
        this.commit('store_virus',this.state.newVirus)
        this.state.newVirus = null;
      },

      mix : function() {
        let newCode="";
        let chosen = [...this.state.chosenParts]; // real copy so that we can splice on the copy
        console.log(chosen)
        let nb = chosen.length;
        for(let i=0;i<nb;i++) {
          // choose randomly a part among the selected ones
          let idx = Math.floor(Math.random() * chosen.length);
          let p = this.state.parts[chosen[idx]];
          newCode = newCode+p.code;
          chosen.splice(idx,1);
        }
        this.state.newVirus = new Virus(viruses.length,'mixedvirus',newCode);
        // remove chosen parts
        for(let i=this.state.chosenParts.length-1;i>=0;i--) {
          this.state.parts.splice(this.state.chosenParts[i],1);
        }
        // unselect all
        this.state.chosenParts.splice(0,this.state.chosenParts.length)
      },

  },

  actions: {
  },
  modules: {
  }
})
