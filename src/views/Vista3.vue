<template>
<div class="Vista3">
    <h1>Fav List</h1>
          <tableuser :usuarios="favourites" />
 <md-button> <md-icon>
    download </md-icon><vue-blob-json-csv
            title="Download Todos CSV"
            file-type="csv"
            file-name="todos"
            :data="csvfavourites"
            class="button is-link"
          /></md-button>
    
</div>
</template>
<script>

import ApiUsers from '../ApiRandomUser.js'
import tableuser from "@/components/tableuser.vue"
import {mapGetters } from 'vuex'
import moment from 'moment'

export default {
name: "Vista3",

components: {
    tableuser,
  },
 
  computed: {
  ...mapGetters(["favourites"]),
   csvfavourites(){
     return this.favourites.map(fav => {
       return {
        gender: fav.gender,
        name: `${fav.name.first} ${fav.name.last}`,
        email: fav.email,
        nacionalidad: fav.nat,
        fechaNacimiento: moment(fav.dob.date).format('MM/DD/YYYY'),
        fechaRegistro: moment(fav.registered.date).format('MM/DD/YYYY'), 
       };
     })
   }
 },

 methods: {
 }
  
 }
</script>
