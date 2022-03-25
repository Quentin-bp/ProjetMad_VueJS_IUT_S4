<template>
  <div>
    <h1>Labo</h1>
    <table border="1">
      <tr>
        <td>
          <keep-alive include="Mixer">
            <router-view name="locSubCentral"></router-view>
          </keep-alive>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Labo',

    computed : {
        samples(){
           return this.$store.state.samples;
        },
        parts(){
          return this.$store.state.parts
        },
    },
    methods: {
      cut : function() {
        if (this.cutFactor == 0) return;
        this.chosenViruses.forEach(e => {
          let s = this.samples[e];
          for(let i=0;i<s.code.length;i+=this.cutFactor) {
            this.parts.push({code : s.code.substring(i,i+this.cutFactor)});
          }
        });
        // remove chosen viruses
        for(let i=this.chosenViruses.length-1;i>=0;i--) {
          this.samples.splice(this.chosenViruses[i],1);
        }
        // unselect all
        this.chosenViruses.splice(0,this.chosenViruses.length)
      },
      mutation : function() {
        if (this.nbMutation == 0) return;

        this.chosenViruses.forEach(e => {
          let newCode;
          let s = this.samples[e];
          for(let i=0;i<this.nbMutation;i++) {
            let idx = Math.floor(Math.random() * s.code.length);
            let chr =  String.fromCharCode(Math.floor(Math.random() * 4)+ "A".charCodeAt(0));
            newCode = s.code.substring(0,idx) + chr + s.code.substring(idx+1);
            s.code = newCode;
            s.updateCaracs();
          }
        });
      },
    }
  }
</script>

<style scoped>
</style>
