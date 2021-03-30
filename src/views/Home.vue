<template>
 <div class="home">
 <v-container fluid>
    <v-row align="center">
       <v-select
          :items="gender"
          label="Género"
          @change="onGender"
          class="selectfilters"
        ></v-select>
         <v-select
          :items="getNats"
          label="Nacionalidad"
          @change="onNats"
          class="selectfilters"
        ></v-select>
         <v-select
          :items="getAge"
          label="Age"
          @change="onAge"
          class="selectfilters"
        ></v-select>
         </v-row>
   </v-container>
     
  <div> 
    <v-btn @click="onButtonClick"> 
      Fav List
    </v-btn>
     <tableuser :usuarios="filteredUsers" />
  </div>
 </div>
            
</template>

<script>

import ApiUsers from '../ApiRandomUser.js'
import tableuser from "@/components/tableuser.vue"


import { mapState, mapGetters } from 'vuex'

export default {
  name: "TableSearch",

  components: {
    tableuser,
  },
 computed: {
   ...mapState(["filters"]), ...mapGetters(["filteredUsers", "getNats", "getAge"])

 },
  data: () => ({
    gender:["","male","female"],
  }),
 
   mounted(){
    },
  methods: {
    onButtonClick(){
       this.$router.push({ name: "Vista3" })
    },

    onGender(value){
      this.$store.dispatch("setGenderFilter", {gender:value});
    },
    onNats(value){
      this.$store.dispatch("setNatFilter", {nat:value});
    },
     onAge(value){
      this.$store.dispatch("setAgeFilter", {age:value});
    },

    chooseUser(item){
        console.log(item);
         this.$router.push({ name: "Vista2", params: {id: item.email} })
    },
  
  },
};
</script>


<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}

.selectfilters {
  max-width: 300px;
  margin-left: 10px;
    margin-right: 10px;
}
</style>
