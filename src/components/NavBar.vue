<template>
    <v-container>
      <v-row justify="center">
        <v-col align="center">
          <v-btn
              class="mx-1"
              color="#42f595"
              x-large
              v-for="(t,index) in titles" :key="index" :style="{color : t.color}" @click="$router.push({path:t.path})">
            {{t.text}}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['titles']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
