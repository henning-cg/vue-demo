<template lang="html">
  <section class="tableuser">
    <div>
      <v-data-table
      :headers="headers"
      :items="usuarios"
      item-key="email"
      :items-per-page="100"
      class="elevation-1"
      @click:row="handleClick"
      hide-default-footer
      :no-data-text="noDataText"
      >
        <template v-slot:item.dob.date="{ item }">
          {{ item.dob.date | formatDate }}
        </template>
        <template v-slot:item.registered.date="{ item }">
          {{ item.registered.date | formatDate }}
        </template>
      </v-data-table>
    </div>
  </section>
</template>

<script lang="js">

import ApiUsers from '../ApiRandomUser.js'

  export default  {
    name: 'tableuser',
     props: {
    usuarios: null,
    noDataText: {default: "No hay perfiles"}
  },
  data: () => ({
    headers:[
      {
        text: "Género", 
        value: "gender"
      },
       {
        text: "Nombre", 
        value: "name.first"
      },
       {
        text: "Email", 
        value: "email"
      },
       {
        text: "Nacionalidad", 
        value: "nat"
      },
       {
        text: "Fecha de Nacimiento", 
        value: "dob.date"
      },
       {
        text: "Fecha de Registro", 
        value: "registered.date"
      },

      
    ]

  }),
 
  methods: {
   handleClick(value) {
     this.$router.push({ name: "Vista2", params: {id: value.email} })
   },
  },
};
</script>

<style scoped lang="scss">
.tableuser {
  width: auto;
}
.md-field {
  max-width: 350px;
}
</style>


