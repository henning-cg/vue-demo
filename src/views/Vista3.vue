<template>
<div class="Vista3">
    <h1>Fav List</h1>
     <tableuser :usuarios="searched"  />
 <md-button> <md-icon>
download </md-icon><vue-blob-json-csv
            @error="handleError"
            title="Download Todos CSV"
            file-type="csv"
            file-name="todos"
            :data="searched"
            :fields="fieldsKey"
            class="button is-link"
          /></md-button>
    
</div>
</template>
<script>

import ApiUsers from '../ApiRandomUser.js'
import tableuser from "@/components/tableuser.vue"
export default {
name: "Vista3",

components: {
    tableuser,
  },

data: () => ({
    selectedfavs: [],
    searched: [],
    users: []
  }),
   mounted(){
     // invocar los métodos
     this.getUsers();
     console.log(this.searched);
     //this.reloadFavs();
    },
 methods: {
     reloadFavs(){
        console.log( JSON.parse(localStorage.getItem('favlist')) );
        var parsedobj =localStorage.getItem('favlist');
        this.selectedfavs = parsedobj;

    },
      getUsers(){
      ApiUsers.getUsers().then((response) => {
        //console.log(response);
        this.users = response;
        this.searched = this.users;
        console.log(this.searched);
      })
    },
 }
 
  
 }
</script>
