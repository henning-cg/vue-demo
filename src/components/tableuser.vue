<template lang="html">

  <section class="tableuser">
<div>
    <md-table
      v-model="usuarios"
      md-sort="name"
      md-sort-order="asc"
      md-card
      md-fixed-header
      mdModelId="email"
      @md-selected="onSelect"
    >
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
       
        </div>
        
          <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>
      </md-table-toolbar>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input
            placeholder="Search by user name..."
            v-model="search"
            @input="searchOnTable"/>
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term .`">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select v-on:click="chooseUser(item)">
       <md-table-cell md-label="Gender" >{{ item.gender }}</md-table-cell>
       <md-table-cell md-label="Name" >{{ item.name.first }} {{ item.name.last }}</md-table-cell>
       <md-table-cell md-label="Email" >{{ item.email }}</md-table-cell>
       <md-table-cell md-label="Nationality" >{{ item.nat }}</md-table-cell>
       <md-table-cell md-label="Date of Birth" >{{ item.dob.date | formatDate}}</md-table-cell>
       <md-table-cell md-label="Register Date" >{{ item.registered.date | formatDate }}</md-table-cell>
      </md-table-row>
    </md-table>

  </div>
      <p>Selected:</p>
    {{ selected }}

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
     selected: [],
    search: null,
    searched: [],

  }),
 
   mounted(){
     //this.getUsers();
    },
  methods: {
    onSelect (items) {
      //console.log(JSON.parse(JSON.stringify(items)));
      this.selected = items
      var parsedobj = JSON.parse(JSON.stringify(items))
      localStorage.setItem('favlist', parsedobj);
      console.log(parsedobj);
      },
      getAlternateLabel (count) {
        let plural = ''
        if (count > 1) {
          plural = 's'
        }
        return `${count} user${plural} selected`
      },
   
    chooseUser(item){
         this.$router.push({ name: "Vista2", params: {id: item.email} })
    },

    searchOnTable() {
      this.usuarios = searchByName( this.usuarios, this.search);
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


