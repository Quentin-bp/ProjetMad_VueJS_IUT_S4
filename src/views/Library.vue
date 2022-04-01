<template>
  <v-card>
      <v-card-title>Library</v-card-title>
      <Articles></Articles>
      <router-view name="locDown"></router-view>
  </v-card>
</template>

<script>

  import Articles from '../components/Articles.vue'
  export default {
    name: 'Library',
    components: {
      Articles
    }
  }
</script>

<style scoped>
</style>
