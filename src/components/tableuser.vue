<template lang="html">

  <section class="tableuser">
<div>
    <v-data-table
    :headers="headers"
    :items="usuarios"
    item-key="email"
    :items-per-page="100"
    class="elevation-1" @click:row="handleClick"
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
// @ is an alias to /src

import ApiUsers from '../ApiRandomUser.js'
import tableuser from "@/components/tableuser.vue"

const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  console.log (items+ "TERMINO"+ term);
  if (term) {
    return items.filter((item) =>
    toLower(item.name.first).includes(toLower(term)
    ) ||
    toLower(item.name.last).includes(toLower(term)
    ))
  }

  return items;
};

  export default  {
    name: 'tableuser',
     props: {
    usuarios: Array
  },
    mounted () {
      console.log( this.usuarios); 
         this.getUsers();
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
 
   mounted(){
     //this.getUsers();
    },
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


