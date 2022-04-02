<template>
  <div>
    <v-data-table
      :headers="[
        { text: 'Nom' },
        { text: 'Code' },
        { text: '%Mortalité' },
        { text: 'Dupliquer le virus dans le laboratoire' },
      ]"
      :items="collec"
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

          <v-btn
            @click="
              $router.push({
                path:
                  '/library/addbasket?name=' + item.name + '&code=' + item.code,
              })
            "
            >Dupliquer</v-btn
          >
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Articles",
  computed: {
    collec() {
      return this.$store.state.collec;
    },
  },
};
</script>

<style scoped>
</style>
